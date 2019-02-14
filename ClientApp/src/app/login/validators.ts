import { ValidationErrors, AbstractControl } from '@angular/forms';

export class LoginValidators {
    static CannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }

        return null;
    }

    static EmailFormat(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('@') < 0) {
            return { shouldBeInEmailFormat: true };
        }

        return null;
    }
}
