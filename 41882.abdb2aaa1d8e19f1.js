(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41882],{41882:o=>{o.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TuiButton, TuiDropdown} from '@taiga-ui/core';\nimport {TuiInputDateModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiInputDateModule,\n        TuiTextfieldControllerModule,\n        ReactiveFormsModule,\n        TuiDropdown,\n        TuiButton,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 2, 15)),\n    });\n}\n"}}]);