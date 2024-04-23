import test from "../Fixtures/testFixtures";
import { STORAGE_STATE } from "../../playwright.config";

import {faker} from "@faker-js/faker"

test.describe("login page",()=>{
    let otp:string
    test.beforeEach(()=>{
        otp=faker.string.numeric({length:6})
    })

    test("Should login with OTP",async({page,loginPage})=>{

       


        await test.step("Step 1: login with OTP",async()=>{
            await loginPage.loginAndVerifyUser({
                email:"cpts9gnqty9-planner-uddipto_mahato-iiit_bhubaneswar@bigbinary.com",
                OTP:otp
            })

        })

        await test.step("Step 2: Save storage state",async()=>{

            await page.context().storageState({ path: STORAGE_STATE });

        })
       

       
        
    })
})