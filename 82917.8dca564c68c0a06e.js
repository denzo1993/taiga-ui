(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82917],{82917:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiIcon} from '@taiga-ui/core';\nimport {TuiPushComponent, TuiPushDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiButton, TuiPushComponent, TuiPushDirective, TuiIcon],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n"}}]);