const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  try {
    // Set the viewport size
    await page.setViewport({ width: 1920, height: 1080 });

    // Set the user agent
    await page.setUserAgent('dexi-engineering');

    // Navigate to the page
    await page.goto('https://data-qa.dexi.io/js-challenge');

    // Wait for the secret code to appear
    await page.waitForSelector('.secret-code');

    // Capture a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // Extract the value of the secret code
    const secretCode = await page.$eval('.secret-code', element => element.textContent);

    console.log('Secret Code:', secretCode);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();
