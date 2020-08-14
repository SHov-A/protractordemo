import {browser, by, element} from "protractor";
import {HomePage} from "../pages/HomePage";

describe("Calculator test", function () {
    let homePage = new HomePage();

    beforeAll(function () {
        homePage.openBrowser("https://juliemr.github.io/protractor-demo/");
    });

    it("Launch url check", function () {
        expect(browser.getTitle()).toContain("Super Calculator")
    });

    it("Add number in calculator", function () {
        homePage.inputFirstElement.sendKeys("6");
        homePage.selectedElementsgetter("/");
        homePage.inputSecondElement.sendKeys("3");
        homePage.clickGoButton.click();
    });

    it("Output result", function () {
        homePage.outputResult.getText().then(function (result: any) {
            console.log("Result are :: " + result)
        })
    });

    afterAll(function () {
       homePage.quitBrowser()
    })
});