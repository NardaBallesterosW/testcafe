import {Selector, selector,t} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#user-name')
        this.passwordInput = Selector('#password')
        this.loginBotton = Selector('#login-button')

    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginBotton)
    }
}

export default new LoginPage