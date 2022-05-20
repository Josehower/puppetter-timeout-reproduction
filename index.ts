import puppeteer from 'puppeteer';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function puppeteerWorkflow(urlToTest: string) {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
  });
  const page = await browser.newPage();

  await page.goto(urlToTest);
  const img = await page.$('[data-test-id="meme-image"]');
  img.click();
  const [element] = await page.$x(`//label[contains(text(), 'Top text')]`);
  element.type('lol');
  img.click();
  await page.waitForNetworkIdle();
  await page.close();
  await browser.close();
}

puppeteerWorkflow('https://drone-break-test.netlify.app/');
