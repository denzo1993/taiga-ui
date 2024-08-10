import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiAccordion],
    templateUrl: './index.html',
    changeDetection,
    providers: [],
})
export default class Page {
    protected readonly assets = import('./examples/assets.md?raw');
}
