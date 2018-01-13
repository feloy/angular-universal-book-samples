import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { MyMaterialModule } from './my-material/my-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CityWeatherResolverService } from './city-weather-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-ch04'
    }),
    HttpClientModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule
  ],
  providers: [CityWeatherResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
