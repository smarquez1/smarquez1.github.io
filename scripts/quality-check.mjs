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
  if ((await page.getByRole('main').count()) !== 1) {
    throw new Error(`${label} page must have exactly one main landmark.`);
  }
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
  if ((await disclosure.count()) !== 1) {
    throw new Error(`${label} experience section must provide one expandable timeline.`);
  }
  const timeline = disclosure.locator(':scope > ol');
  if ((await timeline.locator(':scope > li').count()) !== 8) {
    throw new Error(`${label} timeline must contain eight career entries.`);
  }
  if ((await timeline.locator(':scope > li time').count()) !== 8) {
    throw new Error(`${label} timeline entries must use time elements for their dates.`);
  }
  if ((await timeline.locator(':scope > li article').count()) !== 8) {
    throw new Error(`${label} timeline entries must be articles.`);
  }
  if ((await timeline.locator(':scope > li details').count()) !== 8) {
    throw new Error(`${label} timeline entries must provide native expandable details.`);
  }
  if ((await timeline.locator(':scope > li h3 a').count()) !== 6) {
    throw new Error(
      `${label} timeline must link the six researched employers with public websites.`,
    );
  }

  const contributionNotes = timeline.getByText('Contribution notes', { exact: true });
  await contributionNotes.first().focus();
  if (
    !(await contributionNotes
      .first()
      .evaluate((element) => element === element.ownerDocument.activeElement))
  ) {
    throw new Error(`${label} timeline details are not keyboard focusable.`);
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
    for (const [label, viewport] of [
      ['desktop', { width: 1440, height: 900 }],
      ['mobile', { width: 390, height: 844 }],
    ]) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'networkidle' });
      await assertSemanticShell(page, label);
      await assertTimeline(page, label);
      await assertSocialMetadata(page, label);
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
