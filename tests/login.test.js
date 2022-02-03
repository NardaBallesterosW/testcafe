import {Selector, selector} from 'testcafe'
import loginPage from '../pages/login-page'
import homePage from '../pages/home-page'
import { CREDENTIALS, URLS } from '../data/constants'

fixture('Login feature test')
    //.page ${URLS.LOGIN_URL}
    .page `https://www.saucedemo.com/`

test('As a user, I should be able to loggin succesfully whit valid credentials', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
        await t.expect(homePage.productsTitle.exists).ok()
})

test('As a Invalid user, I should not be able to loggin succesfully ', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERINVALID, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(homePage.productsTitle.exists).notOk()
})
