import Page from "./page.js";


class MainPage extends Page {

/**
 * to open main page
 */
async open () {
    await super.open('');
 }

//1. Test a/b testing

//parent of the lists
get parent(){ return  $('ul')}

//get firstLink(){ return $('=A/B Testing')}
get firstLink(){ return $('li:nth-child(1) a')}

//any of the anchor links
anchorLink(index) { return $(`ul li:nth-child(${index}) a`) }

get testVariation(){return $('#content h3')}

/**
 * 
 * @param {number} index of the link to click
 */
async clickAnchorLink(index) {
    await this.anchorLink(index).click()
}


 //2. Test Add/Remove Elements

 get addElement(){ return $('#content button')}

 get deleteButton(){ return $('#elements button')}

 async clickAddElement(){
    this.addElement.click()
 }

 //3. Test checkboxes

//selectors
get checkbox1(){ return $('#checkboxes input[type=checkbox]:nth-child(1)')}
get checkbox2(){ return $('#checkboxes input[type=checkbox]:nth-child(3)')}


/**
 * click checkbox1
 */
async clickCheckbox1(){
   await this.checkbox1.click()
}

/**
 * click checkbox2
 */
async clickCheckbox2(){
    await this.checkbox2.click()
    }
}
export default new MainPage();