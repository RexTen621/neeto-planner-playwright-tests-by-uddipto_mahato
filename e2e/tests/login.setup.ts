import test from "../Fixtures/testFixtures";

import {faker} from "@faker-js/faker"

test.describe("All test",()=>{
    let otp:string
    test.beforeEach(()=>{
        otp=faker.string.numeric({length:6})
    })

    test("Should login with OTP",async({page,loginPage})=>{
        await loginPage.loginAndVerifyUser({email:"cpts9gnqty9-planner-uddipto_mahato-iiit_bhubaneswar@bigbinary.com",OTP:otp})
        
    })
})