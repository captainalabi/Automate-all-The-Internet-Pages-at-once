import MainPagePage from "../pageobjects/MainPage.page.js"

describe('Switch to Iframe', function () {
    it('Should switch to iframe, set and confirm text ', async () => {

        

        await browser.url('https://the-internet.herokuapp.com/iframe')

        await browser.pause(2000)

        let iframe = await $('.tox-edit-area__iframe')
        await browser.pause(2000)

        let iframeBody = await $('.mce-content-body')
        await browser.pause(2000)

        await browser.switchToFrame(iframe)
        await browser.pause(5000)
        await iframeBody.click()
        await iframeBody.clearValue()
        await iframeBody.setValue('Good Morning')
        await browser.pause(5000)
        await expect(iframeBody).toHaveText('Good Morning')
    })
})