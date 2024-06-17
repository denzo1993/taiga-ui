(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80799],{80799:n=>{n.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiButton, TuiIcon} from '@taiga-ui/core';\nimport {TuiAccordion, TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiInputModule, TuiSelectModule} from '@taiga-ui/legacy';\n\nclass Account {\n    constructor(\n        protected readonly name: string,\n        protected readonly balance: number,\n    ) {}\n\n    protected toString(): string {\n        return `${this.name} (${this.balance})`;\n    }\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    selector: 'tui-accordion-example-2',\n    imports: [\n        NgIf,\n        TuiAccordion,\n        AsyncPipe,\n        TuiAmountPipe,\n        TuiIcon,\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiSelectModule,\n        TuiDataListWrapper,\n        TuiButton,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAccordionExample2 {\n    protected readonly accounts = [\n        new Account('Rubles', 500),\n        new Account('Dollar', 237),\n        new Account('Euro', 100),\n    ];\n\n    protected testForm = new FormGroup({\n        name: new FormControl(''),\n        accounts: new FormControl(this.accounts[0]),\n    });\n}\n"}}]);