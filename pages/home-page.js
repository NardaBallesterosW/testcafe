import {Selector} from 'testcafe'

class HomePage{
    constructor(){
        this.productsTitle = Selector('.title').withText('PRODUCTS')
       

    }
}