import test from "../Fixtures/testFixtures"
import { faker } from "@faker-js/faker"


test.describe("Should create a new project",()=>{

    let newProjectName:string
    let newProjectDescription:string

    test.beforeEach(()=>{

        newProjectName=faker.word.words({count:3})
        newProjectDescription=faker.word.words({count:5})

    })
    test("create a new project",async({page,projectPage})=>{

        await page.goto('/')

        await projectPage.addNewProject({projectName:newProjectName,projectDescription:newProjectDescription})

    })
})