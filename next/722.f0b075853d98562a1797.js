(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{"dlo+":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample4 {\n    readonly testForm = new FormGroup({\n        option: new FormControl(false),\n    });\n\n    open = false;\n    openSettings = false;\n\n    index = 0;\n\n    onClick(): void {\n        this.open = false;\n        this.index = 1;\n    }\n}\n"}}]);