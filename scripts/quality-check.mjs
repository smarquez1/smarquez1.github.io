import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const getAvailablePort = () =>
  new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });

const port = await getAvailablePort();
const baseUrl = `http://127.0.0.1:${port}/`;
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
const preview = spawn(
  'npm',
  ['run', 'dev', '--', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
  { stdio: 'ignore' },
);

const waitForPreview = async () => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await globalThis.fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The preview server may need another moment to start.
    }
    await new Promise((resolve) => globalThis.setTimeout(resolve, 250));
  }
  throw new Error('The Vite preview server did not become ready.');
};

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

const assertJavaScriptDisabled = async (browser, viewport, label) => {
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
    'I build SaaS products around real workflows.',
    '01 / About',
    '02 / Experience',
    '03 / Technical focus',
    'Let’s build something useful.',
  ]) {
    if (!(await page.getByRole('heading', { name: heading }).isVisible())) {
      throw new Error(`${label} JavaScript-disabled check could not find the ${heading} heading.`);
    }
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

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await skipLink.focus();
  if (!(await skipLink.evaluate((element) => element === element.ownerDocument.activeElement))) {
    throw new Error(`${label} skip link is not keyboard focusable.`);
  }
  await page.keyboard.press('Enter');
  if (!page.url().endsWith('#main-content')) {
    throw new Error(`${label} skip link does not target the main landmark.`);
  }

  for (const name of ['About', 'Experience', 'Focus', 'Contact']) {
    const link = page.getByRole('link', { name, exact: true });
    await link.focus();
    if (!(await link.evaluate((element) => element === element.ownerDocument.activeElement))) {
      throw new Error(`${label} ${name} navigation link is not keyboard focusable.`);
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
  const timeline = disclosure.locator(':scope > ol');
  const entries = timeline.locator(':scope > li');
  await assertCount(entries, 8, `${label} timeline must contain eight career entries.`);
  const actualDateRanges = await timeline
    .locator(':scope > li')
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
  await assertCount(
    entries.locator('h3 a'),
    6,
    `${label} timeline must link the six researched employers with public websites.`,
  );

  const contributionNotes = timeline.getByText('Contribution notes', { exact: true });
  await contributionNotes.first().focus();
  if (
    !(await contributionNotes
      .first()
      .evaluate((element) => element === element.ownerDocument.activeElement))
  ) {
    throw new Error(`${label} timeline details are not keyboard focusable.`);
  }

  for (const text of [
    'Turns operational needs from founders and teachers into role-based workflows across web and Hotwire Native applications.',
    'Improved affected page-load times by 20% to 80%, cut CI feedback from approximately 40 minutes to 8 minutes, and led the modernization of more than 500,000 lines of Rails code.',
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
    'Senior Product Engineer specializing in SaaS products, Ruby on Rails, APIs, and full-stack web platforms.';
  const expectedImage = 'https://smarquez1.github.io/assets/social-preview-v3.png';
  const expectedAlt =
    'Sergio Marquez, Senior Product Engineer. Building SaaS products around real workflows with Ruby on Rails, APIs, and full-stack web platforms.';

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
        image.src = '/assets/social-preview-v3.png';
      }),
  );

  if (dimensions.width !== 1200 || dimensions.height !== 630) {
    throw new Error(
      `${label} social preview must be 1200x630. Received ${dimensions.width}x${dimensions.height}.`,
    );
  }
};

try {
  await waitForPreview();
  const browser = await chromium.launch();

  try {
    for (const [label, viewport] of viewports) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'networkidle' });
      await assertSemanticShell(page, label);
      await assertTimeline(page, label);
      if (label === 'desktop') await assertSocialMetadata(page, label);
      await assertNoAccessibilityViolations(page, label);
      await context.close();
      await assertJavaScriptDisabled(browser, viewport, label);
    }
  } finally {
    await browser.close();
  }
} finally {
  preview.kill();
}
