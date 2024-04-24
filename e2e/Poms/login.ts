import { Page } from "playwright";
import { expect } from "playwright/test";
import { LOGIN_SELECTORS } from "../Constants/Selectors/loginpageSelector";
import { LOGIN_TEXTS } from "../Constants/Texts/loginpageTexts";

export default class LoginPage {
    constructor(public page: Page) {
        this.page = page
    }


    loginAndVerifyUser = async ({ email, otpForLogin }: { email: string, otpForLogin: string }): Promise<void> => {

        await this.page.goto("/")
        await this.page.getByTestId(LOGIN_SELECTORS.emailTextField).fill(email)
        await this.page.getByTestId(LOGIN_SELECTORS.submitButton).click()

        await this.page.getByTestId(LOGIN_SELECTORS.otpInputField).fill(otpForLogin)

        await this.page.waitForTimeout(8000)

        await expect(this.page.getByTestId(LOGIN_SELECTORS.mainHeader)).toHaveText(LOGIN_TEXTS.expectedProjectsHeader)

    }
}
