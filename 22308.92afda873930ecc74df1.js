"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[22308],{22308:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'example-tui-pure-function',\n    templateUrl: './pure-function.component.html',\n    changeDetection,\n})\nexport class ExampleTuiPureFunctionComponent {\n    text = '';\n\n    show = false;\n\n    counter = {\n        count: 0,\n    };\n\n    @tuiPure\n    calculate(counter: {count: number}, text: string): {text: string} {\n        counter.count++;\n\n        return {\n            text,\n        };\n    }\n}\n"}}]);