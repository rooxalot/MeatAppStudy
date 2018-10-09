import { RadioOption } from './../../../models/radioOption.model';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioOptionComponent), multi: true }
  ]
})
export class RadioOptionComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];
  selectedValue: any;

  onChangeFunction = (selectedValue: any) => { };

  constructor() { }

  ngOnInit() {
  }

  setRadioOption(option: RadioOption): void {
    if (option) {
      this.selectedValue = option.value;
      this.onChangeFunction(this.selectedValue);
    }
  }

  isSelectedOption(option: RadioOption): Boolean {
    let isSelected: Boolean = false;
    if (this.selectedValue) {
      isSelected = this.selectedValue === option.value;
    }

    return isSelected;
  }

  writeValue(obj: any): void {
    this.setRadioOption(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangeFunction = fn;
  }

  registerOnTouched(fn: any): void { }


  setDisabledState?(isDisabled: boolean): void { }

}
