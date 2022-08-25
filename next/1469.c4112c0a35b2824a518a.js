(window.webpackJsonp=window.webpackJsonp||[]).push([[1469],{"u+f2":function(e,n,o){"use strict";o.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap} from 'rxjs/operators';\n\nimport {PromptService} from './prompt/prompt.service';\n\n@Component({\n    selector: `tui-dialogs-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n})\nexport class TuiDialogsExample1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n        @Inject(PromptService) private readonly promptService: PromptService,\n    ) {}\n\n    onClick(\n        choose: PolymorpheusContent<any>,\n        poorly: PolymorpheusContent<any>,\n        wisely: PolymorpheusContent<any>,\n    ): void {\n        this.promptService\n            .open<unknown>(choose, {\n                heading: `Taiga UI is the best`,\n                buttons: [`Absolutely!`, `No way!`],\n            })\n            .pipe(\n                switchMap(response =>\n                    response\n                        ? this.alertService.open(wisely, {\n                              status: TuiNotification.Success,\n                          })\n                        : this.alertService.open(poorly, {\n                              status: TuiNotification.Error,\n                          }),\n                ),\n            )\n            .subscribe();\n    }\n}\n"}}]);