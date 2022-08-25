(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{Fv0f:function(n,t,o){"use strict";o.r(t),t.default='<tui-accordion\n    *ngIf="svgIcons.rubles | async as lazySvg"\n    class="container"\n    [rounded]="false"\n>\n    <tui-accordion-item\n        borders="top-bottom"\n        [showArrow]="false"\n    >\n        <div class="operation-header">\n            <div class="operation-date">\n                4\n                <div class="operation-month">May</div>\n            </div>\n            <div class="operation-pic">\n                <tui-svg\n                    class="operation-icon"\n                    [src]="lazySvg?.default || \'\'"\n                ></tui-svg>\n            </div>\n            <div class="operation-title">Get your money</div>\n            <div class="operation-info">\n                <tui-money\n                    class="operation-amount"\n                    [value]="23000"\n                ></tui-money>\n                <div class="operation-status">Waiting for approve</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class="form-title">Payment form</h3>\n            <form\n                class="operation-form"\n                [formGroup]="testForm"\n            >\n                <tui-input\n                    tuiTextfieldExampleText="Roman Sedov"\n                    formControlName="name"\n                    class="input"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName="accounts"\n                    class="input"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]="accounts"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class="buttons">\n                    <button\n                        tuiButton\n                        type="submit"\n                        size="l"\n                        class="tui-space_right-2"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type="button"\n                        appearance="flat"\n                        size="l"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item\n        borders="top-bottom"\n        [showArrow]="false"\n    >\n        <div class="operation-header">\n            <div class="operation-date">\n                5\n                <div class="operation-month">May</div>\n            </div>\n            <div class="operation-pic">\n                <tui-svg\n                    class="operation-icon"\n                    [src]="lazySvg?.default || \'\'"\n                ></tui-svg>\n            </div>\n            <div class="operation-title">Get your money back</div>\n            <div class="operation-info">\n                <tui-money\n                    class="operation-amount"\n                    [value]="23000"\n                ></tui-money>\n                <div class="operation-status operation-status_success">Approved</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class="form-title">Payment form</h3>\n            <form\n                class="operation-form"\n                [formGroup]="testForm"\n            >\n                <tui-input\n                    tuiTextfieldExampleText="Roman Sedov"\n                    formControlName="name"\n                    class="input"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName="accounts"\n                    class="input"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]="accounts"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class="buttons">\n                    <button\n                        tuiButton\n                        type="submit"\n                        size="l"\n                        class="tui-space_right-2"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type="button"\n                        appearance="flat"\n                        size="l"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item\n        borders="top-bottom"\n        [showArrow]="false"\n    >\n        <div class="operation-header">\n            <div class="operation-date">\n                6\n                <div class="operation-month">May</div>\n            </div>\n            <div class="operation-pic">\n                <tui-svg\n                    class="operation-icon"\n                    [src]="lazySvg?.default || \'\'"\n                ></tui-svg>\n            </div>\n            <div class="operation-title">Get your neighbor\'s money</div>\n            <div class="operation-info">\n                <tui-money\n                    class="operation-amount"\n                    [value]="23000"\n                ></tui-money>\n                <div class="operation-status operation-status_error">Declined</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class="form-title">Payment form</h3>\n            <form\n                class="operation-form"\n                [formGroup]="testForm"\n            >\n                <tui-input\n                    tuiTextfieldExampleText="Roman Sedov"\n                    formControlName="name"\n                    class="input"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName="accounts"\n                    class="input"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]="accounts"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class="buttons">\n                    <button\n                        tuiButton\n                        type="submit"\n                        size="l"\n                        class="tui-space_right-2"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type="button"\n                        appearance="flat"\n                        size="l"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n</tui-accordion>\n'}}]);