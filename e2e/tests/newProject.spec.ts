import test from "../Fixtures/testFixtures"
import { faker } from "@faker-js/faker"


test.describe("Should login and create a new project", () => {

    let newProjectName: string
    let newProjectDescription: string

    test.beforeEach(() => {

        newProjectName = faker.word.words({ count: 3 })
        newProjectDescription = faker.word.words({ count: 5 })

    })
    test("create a new project", async ({ page, projectPage }) => {

        await test.step("Step 1:Should login and verify", () => page.goto('/'))

        await test.step("Step 2: Should create a new project and verify", () => projectPage.addNewProject({ projectName: newProjectName, projectDescription: newProjectDescription }))

    })
})