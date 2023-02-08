import { assert } from "console"
import MainPagePage from "../pageobjects/MainPage.page.js"
//import expect from "chai"

describe('navigate the links', ()=>{

    it('should navigate any link', async()=>{

MainPagePage.open()

//1. A/B Testing

//await MainPagePage.firstLink.click()

await MainPagePage.clickAnchorLink(1)
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
await expect(MainPagePage.testVariation).toHaveTextContaining('A/B Test')
   
//2. test Add/Remove Elements

//go back to nain page
MainPagePage.open()

//navigate to the Add/Remove Elements
await MainPagePage.clickAnchorLink(2)

await MainPagePage.clickAddElement()
await MainPagePage.clickAddElement()

await expect(MainPagePage.deleteButton).toHaveText('Delete')

//3. Test Broken images

//go back to nain page
MainPagePage.open()

//navigate to the checkbox page
await MainPagePage.clickAnchorLink(6)

await MainPagePage.clickCheckbox1()
//await MainPagePage.clickCheckbox2()

await expect(MainPagePage.checkbox1).toBeChecked()
await expect(MainPagePage.checkbox2).toBeChecked()

//4. Test Context Menu

//go back to nain page
MainPagePage.open()

//navigate to the context menu page
await MainPagePage.clickAnchorLink(7)

await MainPagePage.rightClickSquareBox()

let alertText = await browser.getAlertText()

await expect(alertText).toEqual('You selected a context menu')

//5. test Dynamic Controls

//go back to nain page
MainPagePage.open()

//navigate to the Dynamic Controls page -wait for enabled
await MainPagePage.clickAnchorLink(13)

await MainPagePage.clickEnableButton()
await MainPagePage.enableInputField.waitForEnabled()
await expect(MainPagePage.enableButton).toBeEnabled()

//Test click disabled when the button is clicked again -wait for disabled

await MainPagePage.clickEnableButton()
await MainPagePage.enableInputField.waitForEnabled({reverse: true})
await expect(MainPagePage.enableButton).toBeEnabled()

//Test Remove/add -wait until

await MainPagePage.clickRemoveAddButton()
await browser.waitUntil(()=>{ 

    console.log( MainPagePage.removeAddButton.getText())
    return MainPagePage.removeAddButton.getText() === 'Add'
}, 6000, "should wait untill button text changes")

await expect( MainPagePage.removeAddButton).toHaveText('Add')

//Test to expect the text to change back to Remove when clickrd again

await MainPagePage.clickRemoveAddButton()
await browser.waitUntil(()=>{ 

    console.log( MainPagePage.removeAddButton.getText())
    return MainPagePage.removeAddButton.getText() === "Remove"
}, 6000, "should wait untill button text changes")

await expect( MainPagePage.removeAddButton).toHaveText("Remove")





    })
})