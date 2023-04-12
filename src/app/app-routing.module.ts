import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import {ListeComponent} from "./liste/liste.component";

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'liste', component: ListeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
