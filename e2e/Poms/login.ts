import { Page } from "playwright";
import { expect } from "playwright/test";

export default class LoginPage{
    constructor(public page:Page){
        this.page=page
    }


      loginAndVerifyUser=async({email,OTP}:{email:string,OTP:string}):Promise<void>=>{

        await this.page.goto("/")
        await this.page.getByTestId("login-email-text-field").fill(email)
        await this.page.getByTestId("login-submit-button").click()
        
        await this.page.getByTestId("otpinput-otp-number").fill(OTP)
        
      
        await expect(this.page.getByTestId("main-header")).toHaveText("Choose your neeto product")
        await this.page.getByTestId("neetoapp-link-Planner").click()
        await this.page.waitForLoadState("networkidle")
        await expect(this.page.getByTestId("main-header")).toHaveText("Active Projects")









    }
}