import { defineConfig, devices } from '@playwright/test';
export const STORAGE_STATE = "./auth/session.json";


export default defineConfig({
  testDir: './e2e',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
 
  retries: process.env.CI ? 2 : 0,
 
  workers: 1,
 
  reporter: 'html',

  use: {
   
    trace: 'on-first-retry',
    testIdAttribute: "data-cy",
    baseURL:"https://uddipto-mahato-iiit-bhubaneswar.neetoplanner.net/"

  },

 
  projects: [
    {
      name: "login",
      use: { ...devices["Desktop Chrome"]   },
      testMatch: "**/login.setup.ts", 
      
    },
    {
      name: "teardown",
      use: { ...devices["Desktop Chrome"],},
      testMatch: "**/global.teardown.ts",
    },
    {
      name: "Logged In tests",
      use: { ...devices["Desktop Chrome"], storageState: STORAGE_STATE},
      dependencies: ["login"],
      teardown:"teardown",
      testMatch: "**/*.spec.ts",
      
    },
   
    

  ],

 
});
