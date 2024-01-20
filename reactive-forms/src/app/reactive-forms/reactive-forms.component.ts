import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
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