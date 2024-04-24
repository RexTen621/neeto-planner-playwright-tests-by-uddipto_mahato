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
}