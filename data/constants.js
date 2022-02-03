import dotenv from 'dotenv'
dotenv.config()

export const URLS ={
    LOGIN_URL: process.env.LOGIN_URL
}
export const CREDENTIALS = {
    STANDARD_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
        USERINVALID: process.env.USERINVALID
    }

}