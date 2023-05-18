import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import {ListeComponent} from "./liste/liste.component";
import {PartenariatsComponent} from "./partenariats/partenariats.component";
import {CookiePopupComponent} from "./cookie-popup/cookie-popup.component";

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'partenariats', component: PartenariatsComponent },
  { path: 'cookies', component: CookiePopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
