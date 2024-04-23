import { Page } from "playwright";
import { expect } from "playwright/test";
import { LOGIN_SELECTORS } from "../Constants/Selectors/loginpageSelector";
import { LOGIN_TEXTS } from "../Constants/Texts/loginpageTexts";

export default class LoginPage{
    constructor(public page:Page){
        this.page=page
    }


      loginAndVerifyUser=async({email,OTP}:{email:string,OTP:string}):Promise<void>=>{

        await this.page.goto("/")
        await this.page.getByTestId(LOGIN_SELECTORS.emailTextField).fill(email)
        await this.page.getByTestId(LOGIN_SELECTORS.submitButton).click()
        
        await this.page.getByTestId(LOGIN_SELECTORS.otpInputField).fill(OTP)
        
      
        await expect(this.page.getByTestId(LOGIN_SELECTORS.mainHeader)).toHaveText(LOGIN_TEXTS.expectedMainHeader)
        await this.page.getByTestId(LOGIN_SELECTORS.plannerLink).click()
        await this.page.waitForLoadState("networkidle")
        await expect(this.page.getByTestId(LOGIN_SELECTORS.mainHeader)).toHaveText(LOGIN_TEXTS.expectedProjectsHeader)









    }
}



