// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://blazedemo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("https://blazedemo.com/");
  console.log("url print"+ await page.url());
  await page.locator('select[name="fromPort"]').selectOption('Paris');
  await page.locator('select[name="toPort"]').selectOption('New York');
  await page.locator('input[type="submit"]').click();
  await page.screenshot({path:'screenshot/first_page.jpg'});
  await expect(page).toHaveURL("https://blazedemo.com/reserve.php");
  await page.locator('input[type="submit"]').nth(0).click();
  await page.screenshot({path:'screenshot/second_page.jpg'});

  // const Airline_name =   await page.locator('tr').nth(0).locator('td').nth(2).textContent();
  // console.log("Airline name : " + Airline_name);

  // First available flight ki row
// const flightRow = page.locator('tr').nth(1);

// // Airline name
// const Airline_name = await flightRow.locator('td').nth(2).innerText();
// console.log("Airline name: " + Airline_name);




  await page.getByPlaceholder('First Last').fill('Sonal');
  await page.getByPlaceholder('123 Main St.').fill('Smita Appartment');
  await page.getByPlaceholder('Anytown').fill('Ahmedabad');
  await page.getByPlaceholder('State').fill('Gujarat');
  await page.getByPlaceholder('12345').fill('380015');
  await page.locator('#cardType').selectOption('visa');
  await page.getByPlaceholder('Credit Card Number').fill('7894 4561 1234');
  await page.getByPlaceholder('Month').fill('10');
  await page.getByPlaceholder('Year').fill('2020');
  await page.getByPlaceholder('John Smith').fill('sonal');
  await page.locator('#rememberMe').check();
  await page.locator('input[type="submit"]').click();
  await page.screenshot({path:'screenshot/third_form.jpg'});

  const test = await page.locator('h1').textContent();
  console.log("Booking Confirmation message : " + test);

  const id = await page.locator('tr').nth(1).locator('td').nth(1).textContent();
 

  console.log("id  : " + id );



});

