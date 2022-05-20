import puppeteer from 'puppeteer';

export async function puppeteerWorkflow() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
  });
  const page = await browser.newPage();

  console.log('network test start...');
  await page.waitForNetworkIdle();
  console.log('network check 1 pass');
  await page.waitForNetworkIdle();
  console.log('network check 2 pass');
  await page.waitForNetworkIdle();
  console.log('network check 3 pass');
  await page.waitForNetworkIdle();
  console.log('network check 4 pass');
  await page.waitForNetworkIdle();
  console.log('network check 5 pass');

  await page.waitForNetworkIdle();
  console.log('network check 6 pass');
  await page.waitForNetworkIdle();
  console.log('network check 7 pass');
  await page.waitForNetworkIdle();
  console.log('network check 8 pass');
  await page.waitForNetworkIdle();
  console.log('network check 9 pass');
  await page.waitForNetworkIdle();
  console.log('network check 10 pass');

  await page.waitForNetworkIdle();
  console.log('network check 11 pass');
  await page.waitForNetworkIdle();
  console.log('network check 12 pass');
  await page.waitForNetworkIdle();
  console.log('network check 13 pass');
  await page.waitForNetworkIdle();
  console.log('network check 14 pass');
  await page.waitForNetworkIdle();
  console.log('network check 15 pass');

  await page.waitForNetworkIdle();
  console.log('network check 16 pass');
  await page.waitForNetworkIdle();
  console.log('network check 17 pass');
  await page.waitForNetworkIdle();
  console.log('network check 18 pass');
  await page.waitForNetworkIdle();
  console.log('network check 19 pass');
  await page.waitForNetworkIdle();
  console.log('network check 20 pass');

  await page.close();
  await browser.close();
}

await puppeteerWorkflow();
