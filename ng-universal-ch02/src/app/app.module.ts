import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { DetailsComponent } from './details/details.component';

import { SeoService } from './seo.service';
import { SeoGuard } from './seo.guard';
import { SeoDetailsGuard } from './seo-details.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-ch02'
    }),
    AppRoutingModule
  ],
  providers: [SeoService, SeoGuard, SeoDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
