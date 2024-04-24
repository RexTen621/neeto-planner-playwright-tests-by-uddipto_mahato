import { Page } from "playwright";
import { expect } from "playwright/test";
import { ADD_PROJECT_SELECTORS } from "../Constants/Selectors/ProjectPageSelectors";

export default class ProjectPage {

    constructor(public page: Page) {
        this.page = page

    }

    addNewProject = async ({ projectName, projectDescription }: { projectName: string, projectDescription: string }): Promise<void> => {

        await this.page.locator(ADD_PROJECT_SELECTORS.addButtonSelector).click();
        await this.page.getByTestId(ADD_PROJECT_SELECTORS.nameInputFieldTestId).fill(projectName);
        await this.page.locator(ADD_PROJECT_SELECTORS.descriptionTextareaSelector).fill(projectDescription);
        await this.page.locator(ADD_PROJECT_SELECTORS.submitButtonSelector).click();
        await expect(this.page.getByTestId(ADD_PROJECT_SELECTORS.mainHeaderTestId)).toHaveText(projectName)
    }

    assignNewTaskInProject=async({taskName,username,taskDescription,taskComment}:{taskName:string,username:string,taskDescription:string,taskComment:string})=>{

        await this.page.locator("button.neeto-ui-btn.ml-8").click()
        await this.page.getByTestId("nui-input-field").fill(taskName)
        await this.page.locator("button[data-testid='neeto-molecules-autosave-input-save']").click()
        const taskInDashBoard=this.page.locator("table[data-rfd-droppable-id='sections']").getByRole("row",{name: new RegExp(taskName,"i")})
        await taskInDashBoard.scrollIntoViewIfNeeded()
        await taskInDashBoard.locator("(//button[contains(@class,'neeto-ui-btn neeto-ui-border-gray-500')])[2]").click()
        await this.page.locator("//div[@id='tippy-279']").getByText(username).click()
        await taskInDashBoard.click()
        await expect(this.page.locator("(//button[contains(@class,'neeto-ui-btn neeto-ui-btn--style-secondary')])[2]")).toHaveText("Add checklist")
        await this.page.locator("//p[text()='Add a description here.']").fill(taskDescription)
        await this.page.locator("button.neeto-ui-btn.neeto-ui-btn--style-primary.neeto-ui-btn--size-medium").click()
        await this.page.getByTestId("neeto-editor-content").fill(taskComment)
        await this.page.locator("button[data-cy='chat-post-button']").click()
        await this.page.getByTestId("pane-close-button").click()


    }
}