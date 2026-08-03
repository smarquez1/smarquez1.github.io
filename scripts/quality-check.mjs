import { spawn } from 'node:child_process';

import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const baseUrl = 'http://127.0.0.1:4173/';
const preview = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173'], {
  stdio: 'ignore',
});

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
  if (!(await page.getByRole('main').isVisible())) {
    throw new Error(`${label} JavaScript-disabled check could not find the main landmark.`);
  }
  if (
    !(await page
      .getByRole('heading', { name: 'I turn hard product problems into software that ships.' })
      .isVisible())
  ) {
    throw new Error(`${label} JavaScript-disabled check could not find the hero heading.`);
  }

  await context.close();
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
