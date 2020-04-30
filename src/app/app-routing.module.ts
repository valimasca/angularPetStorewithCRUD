import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';


const routes: Routes = [
  {path: "", redirectTo:"list", pathMatch: "full"},
  {path: "list", component: PetListComponent},
  {path: "add", component: PetAddComponent},
  {path: "edit/:id", component: PetEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
