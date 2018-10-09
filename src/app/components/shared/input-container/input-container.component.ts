import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() successMessage: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (!this.model) {
      throw Error('Este componente deve possuir um elemento que utilize NgModel');
    }
  }

  hasSuccess(): boolean {
    return this.model.valid && this.model.touched;
  }

  hasError(): boolean {
    return this.model.invalid && this.model.touched;
  }


}
