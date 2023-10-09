import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import { InputComponent } from './shared/input/input.component';
import { OutputComponent } from './shared/output/output.component';
import { FoodListComponent } from './shared/food-list/food-list.component';
import { FoodAddComponent } from './shared/food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodListService } from './services/food-list.service';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributoComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
