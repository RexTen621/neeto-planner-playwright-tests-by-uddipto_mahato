import { Page } from "playwright";
import { expect } from "playwright/test";

export default class TaskPage{

    constructor(public page:Page){
        this.page=page
    }


    verifyZeroTask=async({}):Promise<void>=>{

        await this.page.locator("//a[@data-testid='navlink-tasks']").click()
        await expect(this.page.getByTestId("subheader-left")).toHaveText("0 tasks")
        await this.page.locator("//a[@data-testid='navlink-projects']").click()

    }


}