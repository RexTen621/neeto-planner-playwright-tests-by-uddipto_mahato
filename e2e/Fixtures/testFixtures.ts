import {test as base} from "@playwright/test"
import LoginPage from "../Poms/login"
import ProjectPage from "../Poms/addProject"




interface ExtendedFixtures{

    loginPage:LoginPage
    projectPage: ProjectPage

}

const test =base.extend<ExtendedFixtures>({
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    },
    projectPage:async({page},use)=>{
        const projectPage=new ProjectPage(page)
        await use(projectPage)
    }
})

export default test