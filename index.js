const {Builder, By, Key, util} = require("Selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
}

example();