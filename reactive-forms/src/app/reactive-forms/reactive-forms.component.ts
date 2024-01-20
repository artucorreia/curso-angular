import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public form: FormGroup = this.formBuilder.group({ 
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.minLength(11)]],
    age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  public submitForm() {
    if(this.form.valid) {
      console.log(this.form);
      console.log(this.form.value);
    }
  }
}