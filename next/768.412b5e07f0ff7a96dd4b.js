(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{J9HU:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-time-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateTimeExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl([new TuiDay(2017, 2, 15), null]),\n    });\n}\n"}}]);