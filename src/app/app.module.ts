import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { NavComponent } from './nav/nav.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetAddComponent,
    NavComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
