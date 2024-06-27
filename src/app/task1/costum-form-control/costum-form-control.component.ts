import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-costum-form-control',
  templateUrl: './costum-form-control.component.html',
  styleUrls: ['./costum-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CostumFormControlComponent),
      multi: true
    }
  ]
})
export class CostumFormControlComponent implements ControlValueAccessor{

  public value:string = '';
  @Input() placeholder:string='';
  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

}
