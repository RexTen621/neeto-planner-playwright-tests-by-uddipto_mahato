
import test from "../Fixtures/testFixtures";


import {faker} from "@faker-js/faker"

test.describe("Project Page",()=>{
    let newProjectName:string
    let newProjectDescription:string

    test.beforeEach(()=>{
        newProjectName=faker.word.words({count:2})
        newProjectDescription=faker.word.words({count:4})
    })

    test("create a new project",async({page,projectPage})=>{
        
        
        await page.goto("/")
        await projectPage.addNewProject({projectName:newProjectName,projectDescription:newProjectDescription})
        
    })
})