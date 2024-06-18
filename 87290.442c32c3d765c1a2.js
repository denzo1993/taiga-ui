(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87290],{87290:t=>{t.exports="import {AsyncPipe} from '@angular/common';\nimport type {AfterViewInit} from '@angular/core';\nimport {Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';\nimport {tuiClamp} from '@taiga-ui/cdk';\nimport {TuiScrollbar} from '@taiga-ui/core';\nimport type {Observable} from 'rxjs';\nimport {distinctUntilChanged, map, startWith} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiScrollbar, TuiElasticStickyDirective, TuiAmountPipe, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent implements AfterViewInit {\n    @ViewChild(TuiElasticStickyDirective)\n    protected readonly elasticSticky?: TuiElasticStickyDirective;\n\n    protected scale$?: Observable<number>;\n\n    public ngAfterViewInit(): void {\n        if (!this.elasticSticky) {\n            return;\n        }\n\n        // If we use it like that instead of (tuiElasticSticky)=\"onElasticSticky($event)\"\n        // we will not trigger unnecessary change detection when scale is less than 0.5\n        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(\n            map(scale => tuiClamp(scale, 0.5, 1)),\n            startWith(1),\n            distinctUntilChanged(),\n        );\n    }\n}\n"}}]);