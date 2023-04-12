import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {NgOptimizedImage} from "@angular/common";
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { PlanningComponent } from './planning/planning.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    FooterComponent,
    PlanningComponent,
    ListeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
