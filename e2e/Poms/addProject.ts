import { Page } from "playwright";
import { expect } from "playwright/test";

export default class ProjectPage{
    constructor(public page:Page){
        this.page=page

    }

    addNewProject=async({projectName,projectDescription}:{projectName:string,projectDescription:string}):Promise<void>=>{

        await this.page.goto("https://uddipto-mahato-iiit-bhubaneswar.neetoplanner.net/")
        
       
        await this.page.locator("//button[contains(@class,'neeto-ui-btn neeto-ui-btn--style-primary')]").click()
        await this.page.getByTestId("name-input-field").fill(projectName)
        await this.page.locator("//textarea[@placeholder='Enter description']").fill(projectDescription)
        await this.page.locator("//button[@type='submit']").click()
        await expect(this.page.getByTestId("main-header")).toHaveText(projectName)

    }
}