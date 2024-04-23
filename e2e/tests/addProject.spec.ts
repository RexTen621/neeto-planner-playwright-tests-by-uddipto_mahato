import test from "../Fixtures/testFixtures";
import { STORAGE_STATE } from "../../playwright.config";

import {faker} from "@faker-js/faker"

test.describe("Project Page",()=>{
    let newProjectName:string
    let newProjectDescription:string

    test.beforeEach(()=>{
        newProjectName=faker.word.words({count:2})
        newProjectDescription=faker.word.words({count:4})
    })

    test("create a new project",async({page,loginPage,projectPage})=>{
       
       
        await projectPage.addNewProject({projectName:newProjectName,projectDescription:newProjectDescription})
        await page.context().storageState({ path: STORAGE_STATE });
    })
})