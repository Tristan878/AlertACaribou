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
import { CookiePopupComponent } from './cookies/cookie-popup/cookie-popup.component';
import { VoteButtonComponent } from './main-page/vote-button/vote-button.component';
import { PartenariatsComponent } from './partenariats/partenariats.component';
import { BestPhotosSectionComponent } from './main-page/best-photos-section/best-photos-section.component';
import { AllosCarouselComponent } from './main-page/allos-carousel/allos-carousel.component';
import { CookiesComponent } from './cookies/cookies.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    FooterComponent,
    PlanningComponent,
    ListeComponent,
    CookiePopupComponent,
    VoteButtonComponent,
    PartenariatsComponent,
    BestPhotosSectionComponent,
    AllosCarouselComponent,
    CookiesComponent,  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
