(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[75174],{75174:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';\nimport {TuiButtonDirective, TuiLabelDirective} from '@taiga-ui/core';\nimport type {TuiSheetOptions} from '@taiga-ui/legacy';\nimport {TuiSheetModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiButtonDirective,\n        TuiSheetModule,\n        NgForOf,\n        IntersectionObserverModule,\n        TuiLabelDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: ['5rem'],\n    };\n\n    protected readonly images = [\n        'https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',\n    ];\n\n    protected toggle(): void {\n        this.open = !this.open;\n    }\n\n    protected onIntersection(\n        [{isIntersecting}]: IntersectionObserverEntry[],\n        {classList}: HTMLElement,\n    ): void {\n        classList.toggle('_visible', isIntersecting);\n    }\n}\n"}}]);