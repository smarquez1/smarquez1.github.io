import AxeBuilder from '@axe-core/playwright';
import { test } from '@playwright/test';
const viewports = [
  ['desktop', { width: 1440, height: 900 }],
  ['intermediate', { width: 768, height: 1024 }],
  ['mobile', { width: 390, height: 844 }],
];
const expectedTimelineDateRanges = [
  ['2024-05'],
  ['2021-08', '2024-05'],
  ['2017-07', '2021-08'],
  ['2016-05', '2017-05'],
  ['2015-02', '2016-04'],
  ['2013-06', '2015-02'],
  ['2012-09', '2013-06'],
  ['2011-08', '2012-09'],
];
const assertNoAccessibilityViolations = async (page, label) => {
  const results = await new AxeBuilder({ page }).analyze();
  if (results.violations.length > 0) {
    throw new Error(
      `${label} accessibility violations:\n${JSON.stringify(results.violations, null, 2)}`,
    );
  }
};

const assertCount = async (locator, expected, message) => {
  const actual = await locator.count();
  if (actual !== expected) {
    throw new Error(`${message} Expected ${expected}, received ${actual}.`);
  }
};

const visibleCount = (locator) =>
  locator.evaluateAll((elements) => elements.filter((element) => element.checkVisibility()).length);

const activeAnimationCount = (details) =>
  details
    .locator(':scope > [data-disclosure-content]')
    .evaluate(
      (element) =>
        element.getAnimations().filter(({ playState }) => playState === 'running').length,
    );

const openingVisualState = (details) =>
  details.locator(':scope > [data-disclosure-content]').evaluate((element) => {
    const style = globalThis.getComputedStyle(element);

    return {
      height: element.getBoundingClientRect().height,
      opacity: Number.parseFloat(style.opacity),
      overflow: style.overflow,
      scrollHeight: element.scrollHeight,
    };
  });

const assertOpeningVisualState = async (details, message) => {
  const state = await openingVisualState(details);

  if (state.height >= state.scrollHeight || state.opacity >= 1 || state.overflow !== 'hidden') {
    throw new Error(`${message}\nReceived ${JSON.stringify(state)}`);
  }
};

const activeClosingAnimationCount = (page) =>
  page
    .locator('[data-disclosure-ghost]')
    .evaluateAll((elements) =>
      elements.reduce(
        (count, element) =>
          count + element.getAnimations().filter(({ playState }) => playState === 'running').length,
        0,
      ),
    );

const assertClosingVisualState = async (details, message) => {
  await details.evaluate(
    () =>
      new Promise((resolve) =>
        globalThis.requestAnimationFrame(() => globalThis.requestAnimationFrame(resolve)),
      ),
  );
  const state = await details.locator('+ [data-disclosure-ghost]').evaluate((element) => {
    const style = globalThis.getComputedStyle(element);

    return {
      followsDisclosure: element.previousElementSibling?.matches('details') ?? false,
      height: element.getBoundingClientRect().height,
      opacity: Number.parseFloat(style.opacity),
      overflow: style.overflow,
      position: style.position,
      scrollHeight: element.scrollHeight,
    };
  });

  if (
    !state.followsDisclosure ||
    state.height >= state.scrollHeight ||
    state.opacity >= 1 ||
    state.overflow !== 'hidden' ||
    state.position === 'fixed'
  ) {
    throw new Error(`${message}\nReceived ${JSON.stringify(state)}`);
  }
};

const assertVisibleFocus = async (summary, message) => {
  const focus = await summary.evaluate((element) => {
    const style = globalThis.getComputedStyle(element);
    return {
      active: element === element.ownerDocument.activeElement,
      outlineStyle: style.outlineStyle,
      outlineWidth: Number.parseFloat(style.outlineWidth),
    };
  });

  if (!focus.active || focus.outlineStyle === 'none' || focus.outlineWidth < 2) {
    throw new Error(message);
  }
};

const assertJavaScriptDisabled = async (browser, baseUrl, viewport, label) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport });
  const page = await context.newPage();

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  for (const landmark of ['banner', 'main', 'contentinfo']) {
    if (!(await page.getByRole(landmark).isVisible())) {
      throw new Error(
        `${label} JavaScript-disabled check could not find the ${landmark} landmark.`,
      );
    }
  }

  for (const heading of [
    'Hi, I’m Sergio',
    '01 / About',
    '02 / Experience',
    '03 / Technical focus',
    'Let’s build something useful.',
  ]) {
    if (!(await page.getByRole('heading', { name: heading }).isVisible())) {
      throw new Error(`${label} JavaScript-disabled check could not find the ${heading} heading.`);
    }
  }

  const mobileMenu = page.locator('header details');
  if (viewport.width < 640) {
    const menuSummary = mobileMenu.locator('summary');
    if (!(await menuSummary.isVisible())) {
      throw new Error(`${label} JavaScript-disabled mobile menu control must remain available.`);
    }
    await menuSummary.focus();
    await page.keyboard.press('Enter');
    if (!(await mobileMenu.evaluate((element) => element.open))) {
      throw new Error(`${label} JavaScript-disabled mobile menu must open natively with Enter.`);
    }
    for (const name of ['About', 'Experience', 'Focus', 'Contact']) {
      if (!(await mobileMenu.getByRole('link', { name, exact: true }).isVisible())) {
        throw new Error(`${label} JavaScript-disabled mobile menu must expose ${name}.`);
      }
    }
    await page.keyboard.press('Space');
    if (await mobileMenu.evaluate((element) => element.open)) {
      throw new Error(`${label} JavaScript-disabled mobile menu must close natively with Space.`);
    }
  }

  const timelineEntries = page.locator('#experience .timeline-item');
  await assertCount(
    timelineEntries,
    8,
    `${label} JavaScript-disabled timeline must contain all eight career entries.`,
  );
  if ((await visibleCount(timelineEntries)) !== 8) {
    throw new Error(`${label} JavaScript-disabled timeline must expose all eight career entries.`);
  }

  const timelineDisclosure = page.locator('#experience > details.timeline-disclosure');
  if (!(await timelineDisclosure.evaluate((element) => element.open))) {
    throw new Error(`${label} JavaScript-disabled remaining roles must be open by default.`);
  }

  const timelineSummary = timelineDisclosure.locator(':scope > summary');
  await timelineSummary.focus();
  await page.keyboard.press('Space');
  if (await timelineDisclosure.evaluate((element) => element.open)) {
    throw new Error(`${label} JavaScript-disabled timeline must close natively with Space.`);
  }
  if ((await visibleCount(timelineEntries)) !== 4) {
    throw new Error(
      `${label} JavaScript-disabled closed timeline must retain the first four roles.`,
    );
  }
  await page.keyboard.press('Enter');
  if (!(await timelineDisclosure.evaluate((element) => element.open))) {
    throw new Error(`${label} JavaScript-disabled timeline must open natively with Enter.`);
  }

  const contribution = page.locator('.timeline-details').first();
  const contributionSummary = contribution.locator(':scope > summary');
  await contributionSummary.focus();
  await page.keyboard.press('Enter');
  if (!(await contribution.evaluate((element) => element.open))) {
    throw new Error(`${label} JavaScript-disabled contribution notes must open with Enter.`);
  }
  await page.keyboard.press('Space');
  if (await contribution.evaluate((element) => element.open)) {
    throw new Error(`${label} JavaScript-disabled contribution notes must close with Space.`);
  }

  await context.close();
};

const assertSemanticShell = async (page, label) => {
  await assertCount(
    page.getByRole('main'),
    1,
    `${label} page must have exactly one main landmark.`,
  );
  for (const landmark of ['banner', 'contentinfo']) {
    if (!(await page.getByRole(landmark).isVisible())) {
      throw new Error(`${label} page is missing the ${landmark} landmark.`);
    }
  }

  const hero = page.getByRole('heading', { level: 1, name: 'Hi, I’m Sergio' });
  if ((await hero.innerText()).trim() !== 'Hi, I’m Sergio 👋') {
    throw new Error(`${label} hero must use the exact approved greeting.`);
  }
  const heroFontSize = await hero.evaluate((element) =>
    Number.parseFloat(globalThis.getComputedStyle(element).fontSize),
  );
  const expectedHeroFontSize = label === 'mobile' ? 40 : label === 'intermediate' ? 48 : 64;
  if (heroFontSize !== expectedHeroFontSize) {
    throw new Error(
      `${label} hero heading must render at ${expectedHeroFontSize}px. Received ${heroFontSize}px.`,
    );
  }

  const fontEvidence = await page.evaluate(async () => {
    await globalThis.document.fonts.ready;
    const accentedInterFaces = await globalThis.document.fonts.load(
      '400 16px Inter',
      'Sergio Márquez · áéíóúüñ ¿¡',
    );
    const heading = globalThis.document.querySelector('h1');
    const bodyCopy = globalThis.document.querySelector('#about p');
    const metadata = globalThis.document.querySelector('.section-label');

    return {
      heading: globalThis.getComputedStyle(heading).fontFamily,
      body: globalThis.getComputedStyle(bodyCopy).fontFamily,
      metadata: globalThis.getComputedStyle(metadata).fontFamily,
      loaded: {
        geist: globalThis.document.fonts.check('700 16px Geist'),
        inter: globalThis.document.fonts.check('400 16px Inter'),
        geistMono: globalThis.document.fonts.check('400 16px "Geist Mono"'),
      },
      accentedInterFaces: accentedInterFaces.length,
      replacementCharacters: (globalThis.document.body.innerText.match(/�/g) ?? []).length,
    };
  });
  if (!fontEvidence.heading.startsWith('Geist') || fontEvidence.heading.startsWith('Geist Mono')) {
    throw new Error(`${label} headings must use Geist. Received ${fontEvidence.heading}.`);
  }
  if (!fontEvidence.body.startsWith('Inter')) {
    throw new Error(`${label} body copy must use Inter. Received ${fontEvidence.body}.`);
  }
  if (!fontEvidence.metadata.startsWith('"Geist Mono"')) {
    throw new Error(`${label} metadata must use Geist Mono. Received ${fontEvidence.metadata}.`);
  }
  if (Object.values(fontEvidence.loaded).some((loaded) => !loaded)) {
    throw new Error(
      `${label} self-hosted fonts must all be loaded: ${JSON.stringify(fontEvidence)}`,
    );
  }
  if (fontEvidence.accentedInterFaces === 0 || fontEvidence.replacementCharacters > 0) {
    throw new Error(
      `${label} Inter Latin must cover verified accented text without replacement glyphs: ${JSON.stringify(fontEvidence)}`,
    );
  }

  for (const text of [
    'Outside work, I’m usually surfing, learning something new, or finding a better way to make things work.',
    'Most production work is private. This portfolio is the public sample of what I can share.',
  ]) {
    if (!(await page.getByText(text, { exact: true }).isVisible())) {
      throw new Error(`${label} page must expose approved content: ${text}`);
    }
  }

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await skipLink.focus();
  if (!(await skipLink.evaluate((element) => element === element.ownerDocument.activeElement))) {
    throw new Error(`${label} skip link is not keyboard focusable.`);
  }
  await page.keyboard.press('Enter');
  if (!page.url().endsWith('#main-content')) {
    throw new Error(`${label} skip link does not target the main landmark.`);
  }

  const mobileMenu = page.locator('header details');
  const identity = page.getByRole('banner').getByRole('link', {
    name: 'Sergio Marquez',
    exact: true,
  });
  const compactIdentity = identity.locator('span[aria-hidden="true"]');
  if (await mobileMenu.isVisible()) {
    if ((await compactIdentity.innerText()).trim() !== 'SM') {
      throw new Error(`${label} mobile identity must match the approved compact treatment.`);
    }
    const menuSummary = mobileMenu.locator('summary');
    const targetSize = await menuSummary.evaluate((element) => {
      const { width, height } = element.getBoundingClientRect();
      return { width, height };
    });
    if (targetSize.width < 44 || targetSize.height < 44) {
      throw new Error(`${label} mobile menu control must provide a practical 44px touch target.`);
    }
    await menuSummary.focus();
    await assertVisibleFocus(menuSummary, `${label} mobile menu control must show visible focus.`);
    await page.keyboard.press('Enter');
    if (!(await mobileMenu.evaluate((element) => element.open))) {
      throw new Error(`${label} mobile menu must open with Enter.`);
    }
    if ((await menuSummary.innerText()).trim() !== 'CLOSE') {
      throw new Error(`${label} expanded mobile menu must expose an accurate close action.`);
    }
  }

  const activeNavigation = page.getByRole('navigation', {
    name: (await mobileMenu.isVisible())
      ? 'Mobile primary navigation'
      : 'Desktop primary navigation',
  });

  for (const name of ['About', 'Experience', 'Focus', 'Contact']) {
    const link = activeNavigation.getByRole('link', { name, exact: true });
    await link.focus();
    if (!(await link.evaluate((element) => element === element.ownerDocument.activeElement))) {
      throw new Error(`${label} ${name} navigation link is not keyboard focusable.`);
    }
  }

  if (await mobileMenu.isVisible()) {
    await mobileMenu.locator('summary').focus();
    await page.keyboard.press('Space');
    if (await mobileMenu.evaluate((element) => element.open)) {
      throw new Error(`${label} mobile menu must close with Space.`);
    }
    if ((await mobileMenu.locator('summary').innerText()).trim() !== 'MENU') {
      throw new Error(`${label} collapsed mobile menu must expose an accurate menu action.`);
    }
  }

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      globalThis.document.documentElement.scrollWidth >
      globalThis.document.documentElement.clientWidth,
  );
  if (hasHorizontalOverflow) {
    throw new Error(`${label} page has unexpected horizontal overflow.`);
  }
};

const assertTimeline = async (page, label) => {
  const disclosure = page.locator('#experience > details.timeline-disclosure');
  await assertCount(
    disclosure,
    1,
    `${label} experience section must provide one expandable timeline.`,
  );
  const timeline = page.locator('#experience');
  const entries = timeline.locator('.timeline-item');
  await assertCount(entries, 8, `${label} timeline must contain eight career entries.`);
  const actualDateRanges = await timeline
    .locator('.timeline-item')
    .evaluateAll((entries) =>
      entries.map((entry) =>
        [...entry.querySelectorAll('.timeline-date time')].map((time) =>
          time.getAttribute('datetime'),
        ),
      ),
    );
  if (JSON.stringify(actualDateRanges) !== JSON.stringify(expectedTimelineDateRanges)) {
    throw new Error(
      `${label} timeline date ranges must match verified career dates.\nExpected ${JSON.stringify(expectedTimelineDateRanges)}\nReceived ${JSON.stringify(actualDateRanges)}`,
    );
  }
  await assertCount(entries.locator('article'), 8, `${label} timeline entries must be articles.`);
  await assertCount(
    entries.locator('details'),
    8,
    `${label} timeline entries must provide native expandable details.`,
  );

  if ((await visibleCount(entries)) !== 4) {
    throw new Error(`${label} enhanced timeline must initially show four career entries.`);
  }

  const timelineSummary = disclosure.locator(':scope > summary');
  if ((await timelineSummary.getAttribute('aria-controls')) !== 'remaining-roles') {
    throw new Error(`${label} timeline disclosure must identify the remaining roles it controls.`);
  }
  if ((await timelineSummary.innerText()).includes('SHOW REMAINING 4 ROLES') === false) {
    throw new Error(`${label} collapsed timeline disclosure must describe its action and count.`);
  }

  await timelineSummary.focus();
  await page.keyboard.press('Enter');
  if (!(await disclosure.evaluate((element) => element.open))) {
    throw new Error(`${label} timeline disclosure must open with the keyboard.`);
  }
  if ((await activeAnimationCount(disclosure)) === 0) {
    throw new Error(`${label} timeline opening must produce an active content animation.`);
  }
  await assertOpeningVisualState(
    disclosure,
    `${label} timeline opening must begin clipped below its expanded height and opacity.`,
  );
  await assertVisibleFocus(
    timelineSummary,
    `${label} timeline disclosure must retain a visible focus indicator while opening.`,
  );
  await page.waitForTimeout(220);
  if ((await visibleCount(entries)) !== 8) {
    throw new Error(`${label} expanded timeline must show all eight career entries.`);
  }
  if ((await timelineSummary.innerText()).includes('SHOW FEWER ROLES') === false) {
    throw new Error(`${label} expanded timeline disclosure must describe its collapse action.`);
  }

  await page.keyboard.press('Space');
  if (await disclosure.evaluate((element) => element.open)) {
    throw new Error(`${label} timeline disclosure must close with the keyboard.`);
  }
  if ((await activeClosingAnimationCount(page)) === 0) {
    throw new Error(`${label} timeline closing must produce an active content animation.`);
  }
  await assertClosingVisualState(
    disclosure,
    `${label} timeline closing must mirror opening with clipped, fading content in flow.`,
  );
  await assertVisibleFocus(
    timelineSummary,
    `${label} timeline disclosure must retain visible focus while closing.`,
  );

  await page.keyboard.press('Enter');
  if (!(await disclosure.evaluate((element) => element.open))) {
    throw new Error(`${label} timeline disclosure must reverse a closing transition immediately.`);
  }
  if ((await activeAnimationCount(disclosure)) === 0) {
    throw new Error(`${label} reversed timeline transition must remain animated.`);
  }
  await page.waitForTimeout(220);
  await assertCount(
    entries.locator('h3 a'),
    6,
    `${label} timeline must link the six researched employers with public websites.`,
  );

  const contributions = timeline.locator('.timeline-details');
  for (let index = 0; index < (await contributions.count()); index += 1) {
    const contribution = contributions.nth(index);
    const summary = contribution.locator(':scope > summary');
    await summary.focus();
    await page.keyboard.press('Enter');
    if (!(await contribution.evaluate((element) => element.open))) {
      throw new Error(`${label} contribution ${index + 1} must open with Enter.`);
    }
    if ((await activeAnimationCount(contribution)) === 0) {
      throw new Error(`${label} contribution ${index + 1} opening must actively animate.`);
    }
    await assertOpeningVisualState(
      contribution,
      `${label} contribution ${index + 1} opening must begin clipped below its expanded height and opacity.`,
    );
    await assertVisibleFocus(
      summary,
      `${label} contribution ${index + 1} must show visible focus while opening.`,
    );
    await page.waitForTimeout(220);

    await page.keyboard.press('Space');
    if (await contribution.evaluate((element) => element.open)) {
      throw new Error(`${label} contribution ${index + 1} must close with Space.`);
    }
    if ((await activeClosingAnimationCount(page)) === 0) {
      throw new Error(`${label} contribution ${index + 1} closing must actively animate.`);
    }
    await assertClosingVisualState(
      contribution,
      `${label} contribution ${index + 1} closing must mirror opening with clipped, fading content in flow.`,
    );
    await page.waitForTimeout(220);
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const firstContribution = contributions.first();
  const firstContributionSummary = firstContribution.locator(':scope > summary');
  await firstContributionSummary.focus();
  await page.keyboard.press('Enter');
  if ((await activeAnimationCount(firstContribution)) !== 0) {
    throw new Error(`${label} reduced motion must bypass contribution animations.`);
  }
  await timelineSummary.focus();
  await page.keyboard.press('Space');
  if ((await activeAnimationCount(disclosure)) !== 0) {
    throw new Error(`${label} reduced motion must bypass timeline animations.`);
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });

  for (const text of [
    'Works with founders and teachers to turn operational needs into role-based workflows across Ruby on Rails and Hotwire Native. Built recurring Stripe billing with customizable per-student plans.',
    'Reduced affected page-load times by 20% to 80%, cut CircleCI feedback from approximately 40 minutes to 8 minutes, and led incremental Rails and Ruby modernization.',
  ]) {
    if (!(await timeline.getByText(text, { exact: true }).isVisible())) {
      throw new Error(`${label} timeline must expose verified impact: ${text}`);
    }
  }

  const undersizedMetadata = await timeline
    .locator(
      '.timeline-date, .timeline-industry, .timeline-status, .timeline-number, .timeline-details > summary, .timeline-tech li',
    )
    .evaluateAll((elements) =>
      elements
        .filter((element) => Number.parseFloat(globalThis.getComputedStyle(element).fontSize) < 12)
        .map((element) => ({
          className: element.className,
          fontSize: globalThis.getComputedStyle(element).fontSize,
          text: element.textContent?.trim(),
        })),
    );
  if (undersizedMetadata.length > 0) {
    throw new Error(
      `${label} timeline metadata must be at least 12px:\n${JSON.stringify(undersizedMetadata, null, 2)}`,
    );
  }
};

const assertSocialMetadata = async (page, label) => {
  const expectedDescription =
    'Code-first Senior Product Engineer focused on Ruby on Rails, APIs, and full-stack product work.';
  const expectedImage = 'https://smarquez1.github.io/assets/social-preview-v4.png';
  const expectedAlt =
    'Sergio Marquez, code-first Senior Product Engineer focused on Ruby on Rails, APIs, and full-stack product work.';

  for (const [selector, expected] of [
    ['link[rel="canonical"]', 'https://smarquez1.github.io/'],
    ['meta[property="og:description"]', expectedDescription],
    ['meta[property="og:image"]', expectedImage],
    ['meta[property="og:image:alt"]', expectedAlt],
    ['meta[name="twitter:description"]', expectedDescription],
    ['meta[name="twitter:image"]', expectedImage],
    ['meta[name="twitter:image:alt"]', expectedAlt],
  ]) {
    const attribute = selector.startsWith('link') ? 'href' : 'content';
    const actual = await page.locator(selector).getAttribute(attribute);
    if (actual !== expected) {
      throw new Error(`${label} ${selector} must equal ${expected}. Received ${actual}.`);
    }
  }

  const dimensions = await page.evaluate(
    () =>
      new Promise((resolve, reject) => {
        const image = new globalThis.Image();
        image.addEventListener('load', () =>
          resolve({ width: image.naturalWidth, height: image.naturalHeight }),
        );
        image.addEventListener('error', () =>
          reject(new Error('Social preview image failed to load.')),
        );
        image.src = '/assets/social-preview-v4.png';
      }),
  );

  if (dimensions.width !== 1200 || dimensions.height !== 630) {
    throw new Error(
      `${label} social preview must be 1200x630. Received ${dimensions.width}x${dimensions.height}.`,
    );
  }
};

const assertSmoothScrolling = async (page, label) => {
  const navigation = page.getByRole('navigation', { name: 'Desktop primary navigation' });
  for (const name of ['About', 'Experience', 'Focus', 'Contact']) {
    const href = await navigation.getByRole('link', { name, exact: true }).getAttribute('href');
    if (!href?.startsWith('#')) {
      throw new Error(`${label} ${name} navigation link must be an in-page fragment.`);
    }
    if ((await page.locator(href).count()) !== 1) {
      throw new Error(`${label} ${name} navigation target ${href} is missing.`);
    }
  }

  const defaultBehavior = await page.evaluate(
    () => globalThis.getComputedStyle(globalThis.document.documentElement).scrollBehavior,
  );
  if (defaultBehavior !== 'smooth') {
    throw new Error(`${label} html scroll-behavior must be smooth. Received ${defaultBehavior}.`);
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reducedBehavior = await page.evaluate(
    () => globalThis.getComputedStyle(globalThis.document.documentElement).scrollBehavior,
  );
  if (reducedBehavior !== 'auto') {
    throw new Error(
      `${label} html scroll-behavior must be auto under prefers-reduced-motion. Received ${reducedBehavior}.`,
    );
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });
};

for (const [label, viewport] of viewports) {
  test(`${label} quality checks`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    try {
      await page.goto(baseURL, { waitUntil: 'networkidle' });
      await assertSemanticShell(page, label);
      await assertTimeline(page, label);
      if (label === 'desktop') {
        await assertSocialMetadata(page, label);
        await assertSmoothScrolling(page, label);
      }
      await assertNoAccessibilityViolations(page, label);
    } finally {
      await context.close();
    }

    await assertJavaScriptDisabled(browser, baseURL, viewport, label);
  });
}
