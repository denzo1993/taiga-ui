(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{vAR7:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileDialogService} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-mobile-dialog-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n    ],\n})\nexport class TuiMobileDialogExample1 {\n    constructor(\n        @Inject(TuiMobileDialogService)\n        private readonly dialogService: TuiMobileDialogService,\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    show(): void {\n        const actions = ['No thanks', 'Remind me later', 'Rate now'];\n\n        this.dialogService\n            .open(\n                'If you like this app, please take a moment to leave a positive rating.',\n                {\n                    label: 'What do you think?',\n                    actions,\n                },\n            )\n            .pipe(\n                switchMap(index => this.alertService.open(`Selected: ${actions[index]}`)),\n            )\n            .subscribe();\n    }\n}\n"}}]);