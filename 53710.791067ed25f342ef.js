(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53710],{53710:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiElasticContainerComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiElasticContainerComponent, TuiRepeatTimes, TuiButtonDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected content = 1;\n\n    protected add(): void {\n        this.content++;\n    }\n\n    protected remove(): void {\n        this.content--;\n    }\n}\n"}}]);