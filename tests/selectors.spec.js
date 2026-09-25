import {test, expect} from '@playwright/test'

test ('Selectors Demo', async ({page}) => {


    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //Usando cualquier propiedad de un elemento
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('secret_sauce')
    await page.locator('[id=user-name]').fill('Einstein')
    //Usando selector CSS
    // #login-button
    await page.locator('#login-button').click()
    //usando XPath
    await page.locator('xpath=//input[@name="password"]').fill('Farah')
    await page.locator('//input[@name="password"]').fill('salsa_roja')
    //Usando texto de un elemento
    await page.locator('text=Login').click()
    await page.locator('input:has-text("Login")').click()
   
})