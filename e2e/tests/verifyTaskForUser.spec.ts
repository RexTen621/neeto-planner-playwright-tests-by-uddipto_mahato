import test from "../Fixtures/testFixtures"
import { faker } from "@faker-js/faker"
import { expect } from "playwright/test";
import dotenv from 'dotenv';

dotenv.config();


test.describe("Should login and verify task for same user", { serial: true }, () => {

    let newProjectName: string
    let newProjectDescription: string
    let newTaskName:string
    let newTaskDescription:string
    let newTaskComment:string
    let newUsername:string


    test.beforeEach(() => {

        newProjectName = faker.word.words({ count: 3 })
        newProjectDescription = faker.word.words({ count: 5 })
        newTaskName=faker.word.words({count:2})
        newTaskDescription=faker.word.words({count:4})
        newTaskComment=faker.word.words({count:3})
        newUsername=process.env.USER_NAME as string

    })
    test("heading to project page for creating one task ", async ({ page, projectPage,taskPage }) => {

        await test.step("Step 1:Should login and verify", () => page.goto('/'))

        await test.step("verify there is no task",()=>taskPage.verifyZeroTask({}))

        await test.step("Step 3: Should create a new project and verify", () => projectPage.addNewProject({ projectName: newProjectName, projectDescription: newProjectDescription }))

        await test.step("Step 4:creating task",()=>projectPage.assignNewTaskInProject({taskName:newTaskName,username:newUsername,taskDescription:newTaskDescription,taskComment:newTaskComment}))

        
        })

    test("creating second task for new project",async({page, projectPage,taskPage})=>{
        await test.step("Step 1:Should login and verify", () => page.goto('/'))
        await test.step("Step should go to project page",()=>page.locator("//a[@data-testid='navlink-projects']").click())
        await test.step("Step 3: Should create a new project and verify", () => projectPage.addNewProject({ projectName: newProjectName, projectDescription: newProjectDescription }))
        await test.step("Step 4:creating task",()=>projectPage.assignNewTaskInProject({taskName:newTaskName,username:newUsername,taskDescription:newTaskDescription,taskComment:newTaskComment}))

    })  
    
    test("verify created project",async({page})=>{

        await test.step("Step 1:Should login and verify", () => page.goto('/'))
        await page.locator("//a[@data-testid='navlink-tasks']").click()
        await expect(page.getByTestId("subheader-left")).toHaveText("2 tasks")

    })
    
})