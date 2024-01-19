import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public form: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    age: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  submitForm() {
    console.log(this.form);
    console.log(this.form.value);
  }
}