import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../app/login/login.component"
import { CamListComponent } from "../app/cam-list/cam-list.component"

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CamListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
