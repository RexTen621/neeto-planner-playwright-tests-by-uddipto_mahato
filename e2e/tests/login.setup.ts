import test from "../Fixtures/testFixtures";
import { STORAGE_STATE } from "../../playwright.config";
import dotenv from 'dotenv';
dotenv.config();

import {faker} from "@faker-js/faker"

test.describe("Shoud Perform Login Test",()=>{
    let otp:string
    test.beforeEach(()=>{
        otp=faker.string.numeric({length:6})
    })

    test("Should login with OTP",async({page,loginPage})=>{

        await test.step("Step 1: login with OTP",async()=>{
            await loginPage.loginAndVerifyUser({
                email:process.env.LOGIN_EMAIL as string,
                otpForLogin:otp
            })

        })

        await test.step("Step 2: Save storage state",()=>page.context().storageState({ path: STORAGE_STATE }))
       
    })
})