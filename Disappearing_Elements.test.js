
import MainPagePage from "../pageobjects/MainPage.page.js";

describe('Test Disappearing Elements', () => {
    it('All the Elements should dissappear when anyone of them is clicked', async () => {
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
});