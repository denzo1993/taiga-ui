(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{ZTav:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            icon: `tuiIconCheckCircleLarge`,\n            mode: `HH:MM:SS`,\n            itemSize: `s`,\n        }),\n    ],\n})\nexport class TuiInputTimeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    items1 = tuiCreateTimePeriods();\n}\n"}}]);