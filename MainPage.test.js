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

//navigate to the c
await MainPagePage.clickAnchorLink(6)

await MainPagePage.clickCheckbox1()
await MainPagePage.clickCheckbox2()

await expect(MainPagePage.checkbox1).toBeChecked()
//await expect(MainPagePage.checkbox2).toBeChecked()
    })
})