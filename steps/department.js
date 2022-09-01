const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user has logged in", async function () {
  await page.goto("https://app.restrox.co/login");
});

When('the user creates a department {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
});

Then('a new department called {string} should be created', function (string) {
  // Write code here that turns the phrase above into concrete actions
});

