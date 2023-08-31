const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const CareerPage = require('../pageobjects/career.page')

describe('Test Javan', () => {
    it('Search not found in career', async () => {
        await HomePage.open()
        await HomePage.openCareerPage()
        await CareerPage.searchField.setValue("asdasd");
        await CareerPage.searchBtn.click();
        await expect(CareerPage.mainCareerPage).toHaveTextContaining('Search Not Found!')
    })
    it.only('Search career with special character', async () => {
        const pageNotWorking = $('/html/body/div[1]/div[1]/div[2]/h1/span')
        await HomePage.open()
        await HomePage.openCareerPage()
        await CareerPage.searchField.setValue("'1'='1");
        await CareerPage.searchBtn.click();
        await browser.pause(5000)
        expect(await pageNotWorking.isDisplayed()).toBe(false);
    })
})

