(window.webpackJsonp=window.webpackJsonp||[]).push([[1763],{IXsl:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-mapper-example2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample2 {\n    readonly numbers = [1, 2, 3, 4, 5] as const;\n\n    readonly mapper = (numbers: readonly number[], multiplier: number): number[] =>\n        numbers.map(number => number * multiplier);\n}\n"}}]);