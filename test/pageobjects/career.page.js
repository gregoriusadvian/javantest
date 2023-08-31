const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CareerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchField () {
        return $('/html/body/div[2]/section/div[2]/form/input');
    }
    get searchBtn () {
        return $('/html/body/div[2]/section/div[2]/form/button');
    }
    get titleCareerPage (){
        return $('/html/body/div[2]/section/div[1]/div[1]/h1')
    }
    get mainCareerPage (){
        return $('/html/body/div[2]/div[1]')
    }
    
}

module.exports = new CareerPage();
