(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{C1cc:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-chart-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample3 {\n    readonly dotted: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n    ];\n\n    readonly solid: readonly TuiPoint[] = [\n        [150, 50],\n        [200, 150],\n        [250, 155],\n    ];\n\n    readonly dashed: readonly TuiPoint[] = [\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n}\n"}}]);