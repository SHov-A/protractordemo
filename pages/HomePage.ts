import {browser, by, element} from "protractor";

export class HomePage {
    private _inputFirstElement: any = element(by.model("first"));
    private _chooseSecondElement: any = by.model("operator");
    private _inputSecondElement: any = element(by.model("second"));
    private _clickGoButton: any = element(by.id("gobutton"));
    private _outputResult: any = element(by.className("ng-binding"));

    get inputFirstElement(): any {
        return this._inputFirstElement;
    }

    get chooseSecondElement(): any {
        return this._chooseSecondElement;
    }

    get inputSecondElement(): any {
        return this._inputSecondElement;
    }

    get clickGoButton(): any {
        return this._clickGoButton;
    }

    get outputResult(): any {
        return this._outputResult;
    }

    selectedElementsgetter(operator: string) {
        let operators = element(this.chooseSecondElement);
        let options = operators.all(by.tagName('option'));
        options.then(function (items) {
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt:any) {
                    if (txt == operator ){
                        items[i].click();
                    }
                })
            }

        })
    };


    openBrowser(url: string) {
        browser.get(url);
        browser.manage().window().maximize();
    }

    quitBrowser() {
        browser.quit();
    }


}