import {test as base} from "@playwright/test"
import LoginPage from "../Poms/login"
import ProjectPage from "../Poms/addProject"
import TaskPage from "../Poms/verifyTask"




interface ExtendedFixtures{

    loginPage:LoginPage
    projectPage: ProjectPage
    taskPage:TaskPage

}

const test =base.extend<ExtendedFixtures>({
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    },
    projectPage:async({page},use)=>{
        const projectPage=new ProjectPage(page)
        await use(projectPage)
    },
    taskPage:async({page},use)=>{
        const taskPage=new TaskPage(page)
        await use(taskPage)
    }
})

export default test