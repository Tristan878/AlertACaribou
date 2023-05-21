import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import {ListeComponent} from "./liste/liste.component";
import {PartenariatsComponent} from "./partenariats/partenariats.component";
import {PlanningComponent} from "./planning/planning.component";
import {CookiesComponent} from "./cookies/cookies.component";

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'partenariats', component: PartenariatsComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'cookies', component: CookiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
