(window.webpackJsonp=window.webpackJsonp||[]).push([[1228],{DfNN:function(n,a,s){"use strict";s.r(a),a.default='<tui-island class="island">\n    <h3 class="tui-island__title">S-size</h3>\n\n    <tui-range\n        id="s-size-range"\n        size="s"\n        class="range"\n        [max]="100"\n        [(ngModel)]="smallRangeValue"\n    ></tui-range>\n\n    <p class="tui-island__paragraph">\n        Control value:\n        <output for="s-size-range">\n            <code>{{ smallRangeValue | json }}</code>\n        </output>\n    </p>\n</tui-island>\n\n<tui-island class="island">\n    <h3 class="tui-island__title">M-size</h3>\n\n    <tui-range\n        id="m-size-range"\n        size="m"\n        class="range"\n        [formControl]="bigRangeControl"\n        [max]="100"\n    ></tui-range>\n\n    <p class="tui-island__paragraph">\n        Control value:\n        <output for="m-size-range">\n            <code>{{ bigRangeControl.value | json }}</code>\n        </output>\n    </p>\n</tui-island>\n'}}]);