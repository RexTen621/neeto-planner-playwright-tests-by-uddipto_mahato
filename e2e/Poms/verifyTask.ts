import { Page } from "playwright";
import { expect } from "playwright/test";

export default class TaskPage {

    constructor(public page: Page) {
        this.page = page
    }


    verifyZeroTask = async ({ }): Promise<void> => {

        await this.page.locator("//a[@data-testid='navlink-tasks']").click()
        await expect(this.page.getByTestId("subheader-left")).toHaveText("0 tasks")
        await this.page.locator("//a[@data-testid='navlink-projects']").click()

    }

    assignNewTaskInProject = async ({ taskName, username, taskDescription, taskComment }: { taskName: string, username: string, taskDescription: string, taskComment: string }) => {

        await this.page.locator("button.neeto-ui-btn.ml-8").click()
        await this.page.getByTestId("nui-input-field").fill(taskName)
        await this.page.locator("button[data-testid='neeto-molecules-autosave-input-save']").click()
        const getTaskRow = this.page.locator("table[data-rfd-droppable-id='sections']").getByRole("row", { name: new RegExp(taskName, "i") })

        await getTaskRow.locator("(//button[contains(@class,'neeto-ui-btn neeto-ui-border-gray-500')])[3]").click()
        await this.page.locator(".neeto-ui-dropdown__popup-menu-item-btn").getByText(username).click()
        await getTaskRow.locator("(//div[contains(@class,'hover:neeto-ui-text-primary-800 flex')])[3]").click()
        await this.page.waitForTimeout(3000)
        await expect(this.page.locator("(//button[contains(@class,'neeto-ui-btn neeto-ui-btn--style-secondary')])[2]")).toHaveText("Add checklist")
        await this.page.locator("(//div[@class='flex items-center'])[1]").click()
        await this.page.locator("(//div[@data-cy='neeto-editor-content'])[1]").fill(taskDescription)

        await this.page.locator("button.neeto-ui-btn.neeto-ui-btn--style-primary.neeto-ui-btn--size-medium").click()

        await this.page.locator("(//div[@data-cy='neeto-editor-content'])[2]").fill(taskComment)
        await this.page.locator("button[data-cy='chat-post-button']").click()

        await this.page.getByTestId("pane-close-button").click()


    }


}
