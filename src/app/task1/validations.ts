import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateRangeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const fromDate = control.get('fromDate')?.value;
    const toDate = control.get('toDate')?.value;

    if (!fromDate || !toDate) {
      return null;
    }
    return new Date(fromDate) <= new Date(toDate)
      ? null
      : { dateRangeInvalid: true };
  };
}

export function positionValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const position = (
      control.get('positionLevel')?.value as String
    ).toLocaleLowerCase();
    if (
      !position ||
      (position === 'junior' || position === 'senior' || position === 'middle')
    ) {
      return null;
    } else {
      return { positionValidator: true };
    }
  };
}
