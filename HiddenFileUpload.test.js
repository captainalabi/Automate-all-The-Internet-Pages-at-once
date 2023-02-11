//import { expect } from "chai";
//import { debug } from "console";


describe("Test hidden file upload button", ()=>{
    it('Should upload file successfully', async () => {
        
        browser.url("https://practice.automationbro.com/cart/")

        //get the input type file element
        let typeFileButton = await $("#upfile_1")

        //get the upload button
        let uploadButton = await $("#upload_1.file_input_submit")

        //get the confirm message element
        let confirmMessageElement = await $("#wfu_messageblock_header_1_1")

        // declare path of file to upload
        const filePath ="../wdio/data/code.png"
        
        //make input field visible
        await browser.execute("document.getElementById('upfile_1').className=''")
        
        //attach path to browser
        const remotePath = await browser.uploadFile(filePath)

        //attach remote path to element
        await typeFileButton.setValue(remotePath)

        //click the element
        await uploadButton.click()

        //Assertion
        await expect(confirmMessageElement).toHaveTextContaining("uploaded successfully")

    });
})