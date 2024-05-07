import puppeteer from "puppeteer";

jest.setTimeout(50000);

describe("popover", () => {
  let browser;
  let page;

  beforeEach(async () => {
    try {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    page = await browser.newPage();
  });

  test("Form should render on page start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitFor(".wrapper-btn");
  });

  test("should add .popover-message_visible", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.goto("http://localhost:9000");
    const container = await page.$("#popover-container");
    const btn = await container.$(".btn");
    btn.click();
    await page.waitForSelector(".popover-message_visible");
  });

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
