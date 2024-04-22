import {test as base} from "@playwright/test"
import LoginPage from "../Poms/login"




interface ExtendedFixtures{

    loginPage:LoginPage

}

const test =base.extend<ExtendedFixtures>({
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    }
})

export default test