import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    OutputComponent
  ]
})
export class SharedModule { }