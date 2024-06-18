(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72730],{1996:e=>{e.exports="import {Component, ElementRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiScrollbar} from '@taiga-ui/core';\n\nconst SOME_OFFSET_CONST = 20;\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiButton, TuiScrollbar],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    @ViewChild(TuiScrollbar, {read: ElementRef})\n    private readonly scrollBar?: ElementRef<HTMLElement>;\n\n    protected SOME_OFFSET_CONST = SOME_OFFSET_CONST;\n\n    protected get scrollTop(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;\n    }\n\n    protected get scrollLeft(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;\n    }\n\n    protected onClick(): void {\n        if (!this.scrollBar) {\n            return;\n        }\n\n        const {nativeElement} = this.scrollBar;\n\n        nativeElement.scrollTop =\n            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;\n    }\n}\n"}}]);