(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31826],{31826:n=>{n.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiDay} from '@taiga-ui/cdk';\nimport {TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TuiCalendarComponent} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [NgIf, TuiCalendarComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value: TuiDayRange | null = null;\n\n    protected firstMonth = TuiMonth.currentLocal();\n\n    protected middleMonth = TuiMonth.currentLocal().append({month: 1});\n\n    protected lastMonth = TuiMonth.currentLocal().append({month: 2});\n\n    protected hoveredItem: TuiDay | null = null;\n\n    protected onDayClick(day: TuiDay): void {\n        if (!this.value?.isSingleDay) {\n            this.value = new TuiDayRange(day, day);\n        }\n\n        this.value = TuiDayRange.sort(this.value.from, day);\n    }\n\n    protected onMonthChangeFirst(month: TuiMonth): void {\n        this.firstMonth = month;\n        this.middleMonth = month.append({month: 1});\n        this.lastMonth = month.append({month: 2});\n    }\n\n    protected onMonthChangeMiddle(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -1});\n        this.middleMonth = month;\n        this.lastMonth = month.append({month: 1});\n    }\n\n    protected onMonthChangeLast(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -2});\n        this.middleMonth = month.append({month: -1});\n        this.lastMonth = month;\n    }\n}\n"}}]);