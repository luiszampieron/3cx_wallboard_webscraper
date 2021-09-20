const { Builder, By, Key, until, element} = require('selenium-webdriver')
const configs = require('./configs')

async function get_cookie() {
    let driver = await new Builder().forBrowser('firefox').build()

    await driver.get(configs.url)
    await driver.findElement(By.id('loginInput')).sendKeys(configs.user)
    await driver.findElement(By.id('passwordInput')).sendKeys(configs.password, Key.RETURN)


    await driver.switchTo().newWindow('tab');
    await driver.get(configs.urlWallboard);

    let element = driver.findElement(By.css("body"));
    let elements = await element.getAttribute('innerHTML')
    console.log(elements)
    driver.quit()
}

get_cookie()
