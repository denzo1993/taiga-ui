(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63376],{63376:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiThumbnailCard} from '@taiga-ui/addon-commerce';\nimport {TuiIcon, TuiTitle} from '@taiga-ui/core';\nimport {\n    TuiAvatar,\n    TuiAvatarStackComponent,\n    TuiBadge,\n    TuiCheckboxComponent,\n    TuiProgressModule,\n} from '@taiga-ui/kit';\nimport {TuiCell} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiIcon,\n        TuiCell,\n        TuiProgressModule,\n        TuiBadge,\n        TuiAvatar,\n        TuiAvatarStackComponent,\n        TuiCheckboxComponent,\n        TuiThumbnailCard,\n        FormsModule,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = false;\n}\n"}}]);