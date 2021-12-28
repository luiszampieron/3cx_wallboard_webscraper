const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true
});
const page = await browser.newPage();
let url = 'https://www.google.com';
await page.goto(url, {
      waitUntil: 'networkidle'
    });
await page.pdf({path: '/tmp/google.pdf', format: 'A4'});
await browser.close();
})();
