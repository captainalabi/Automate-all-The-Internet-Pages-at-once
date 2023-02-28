//import { expect } from "chai"
//import { assert } from "console"
import MainPagePage from "../pageobjects/MainPage.page.js"
//import expect from "chai"

describe('navigate the links', ()=>{

    it("1. should visit basic auth secured page directly with username=admin and password=admin", async function() {

        await browser.url("http://admin:admin@the-internet.herokuapp.com/basic_auth");
     
         const page_message = await MainPagePage.authMessage
          
         await expect(page_message).toHaveText("Congratulations! You must have the proper credentials.")
     
        await browser.pause(5000)
     });

    it('2. A/B Testing', async () => {
            MainPagePage.open()

await MainPagePage.clickAnchorLink(1)
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
await expect(MainPagePage.testVariation).toHaveTextContaining('A/B Test')
   
await browser.pause(2000)
        });

        it('3. test Add/Remove Elements', async () => {
            //go back to nain page
MainPagePage.open()

//navigate to the Add/Remove Elements
await MainPagePage.clickAnchorLink(2)

await MainPagePage.clickAddElement()
await MainPagePage.clickAddElement()

await expect(MainPagePage.deleteButton).toHaveText('Delete')

await browser.pause(2000)

        });

        it('4. checkboxes', async ()=>{  
//go back to nain page
MainPagePage.open()

//navigate to the checkbox page
await MainPagePage.clickAnchorLink(6)

await MainPagePage.clickCheckbox1()
//await MainPagePage.clickCheckbox2()

await expect(MainPagePage.checkbox1).toBeChecked()
await expect(MainPagePage.checkbox2).toBeChecked()

await browser.pause(2000)
});

it('5. Test Context Menu', async () => {
    
//go back to nain page
MainPagePage.open()

//navigate to the context menu page
await MainPagePage.clickAnchorLink(7)

await MainPagePage.rightClickSquareBox()

let alertText = await browser.getAlertText()

await expect(alertText).toEqual('You selected a context menu')

await browser.pause(2000)
});

it('6. Dynamic controls', async () => {

//go back to nain page
MainPagePage.open()

//navigate to the Dynamic Controls page -wait for enabled
await MainPagePage.clickAnchorLink(13)

await MainPagePage.clickEnableButton()
await MainPagePage.enableInputField.waitForEnabled()
await expect(MainPagePage.enableButton).toBeEnabled()
});

it('7. Test click disabled when the button is clicked again -wait for disabled', async () => {


await MainPagePage.clickEnableButton()
await MainPagePage.enableInputField.waitForEnabled({reverse: true})
await expect(MainPagePage.enableButton).toBeEnabled()
});

it('8. Test Remove/add -wait until', async () => {
 
await MainPagePage.clickRemoveAddButton()
await MainPagePage.removeAddButton.waitUntil( async ()=>{ 

    //console.log( MainPagePage.removeAddButton.getText())
    return (await MainPagePage.removeAddButton.getText()) === 'Add'
}, {
        timeout: 60000,
        timeoutMsg: 'expected text to be different after 6s'
    }
)
await expect(MainPagePage.removeAddButton).toHaveText('Add')
});

it('9. Test to expect the text to change back to Remove when clicked again', async () => {
    await MainPagePage.clickRemoveAddButton()
await browser.waitUntil( async ()=>{ 

    console.log( MainPagePage.removeAddButton.getText())
    return ( await MainPagePage.removeAddButton.getText()) === "Remove"
}, 6000, "should wait untill button text changes")

await expect( MainPagePage.removeAddButton).toHaveText("Remove")

await browser.pause(2000)
});

it('10. Test File Upload', async () => {
    //go back to nain page
MainPagePage.open()

//navigate to the Dynamic Controls page -wait for enabled
await MainPagePage.clickAnchorLink(18)

//declear file path
const filePath = ('../wdio/data/code.png')

console.log("path :::::::::::" + filePath)

//attach path to browser
const remoteFilePath = await browser.uploadFile(filePath)

await MainPagePage.fileUploadButton.setValue(remoteFilePath)

//click submit button to submit
await MainPagePage.clickSubmitButton()

await browser.pause(2000)
//Assertion
await expect(MainPagePage.uploadedMessage).toHaveText('File Uploaded!')
});

it('11. All the Elements should dissappear when anyone of them is clicked', async () => {
    //visit main page
        await MainPagePage.open();

        //navigate to Disappearing Elements page
        await MainPagePage.clickAnchorLink(9);
        await browser.pause(5000)

        //click any of the elements by number
        await MainPagePage.clickTheElements(2);
        await browser.pause(5000)

        //check that element no longer exisits, the url cahanged
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/about/')
        await expect(MainPagePage.theElements(2)).not.toBeExisting()

        
});
    })

    
