import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe, tuiIconResolverProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconResolverProvider(
            (name) =>
                `assets/taiga-ui/icons-material${name.replace('@tui.material', '').split('.').join('/')}.svg`,
        ),
    ],
})
export default class Example {}
