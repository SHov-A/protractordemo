import {Config} from "protractor";

export const config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",

    multiCapabilities: [{
        browserName: "chrome",
    }, {
        browserName: "firefox"
    }],
    specs: [
        "./specs/*Test.js",
    ]
};