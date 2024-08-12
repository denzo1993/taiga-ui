import {NgModule} from '@angular/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTextfieldAppearanceDirective} from './textfield-appearance.directive';
import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldFillerDirective} from './textfield-filler.directive';
import {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldPostfixDirective} from './textfield-postfix.directive';
import {TuiTextfieldPrefixDirective} from './textfield-prefix.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TuiTextfieldExpandableTriggerDirective} from './textfield-expandable-trigger.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [PolymorpheusOutlet, PolymorpheusTemplate],
    declarations: [
        TuiTextfieldAppearanceDirective,
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldIconDirective,
        TuiTextfieldIconLeftDirective,
        TuiTextfieldPrefixDirective,
        TuiTextfieldPostfixDirective,
        TuiTextfieldFillerDirective,
        TuiTextfieldExpandableTriggerDirective,
    ],
    exports: [
        TuiTextfieldAppearanceDirective,
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldSizeDirective,
        TuiTextfieldIconDirective,
        TuiTextfieldIconLeftDirective,
        TuiTextfieldPrefixDirective,
        TuiTextfieldPostfixDirective,
        TuiTextfieldFillerDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiTextfieldExpandableTriggerDirective,
    ],
})
export class TuiTextfieldControllerModule {}
