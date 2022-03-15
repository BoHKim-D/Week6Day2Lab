const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {By} = require('selenium-webdriver')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add Movies', async () => {
    
        let message = await driver.findElement(By.id('message'))

        await driver.findElement(By.xpath('//input')).sendKeys('Bakemonogatari')

        await driver.findElement(By.xpath('//button[text() = "Add"]')).click()

        await driver.sleep(1000)

        await driver.findElement(By.xpath('//span')).click()

        expect(message.isDisplayed()).toBeTruthy()
        
        await driver.findElement(By.xpath('//span')).click()

        expect(message.isDisplayed()).toBeTruthy()

        await driver.findElement(By.xpath('//button[text() = "x"]')).click()

        expect(message.isDisplayed()).toBeTruthy()
        
        await driver.sleep(1000)

    })
