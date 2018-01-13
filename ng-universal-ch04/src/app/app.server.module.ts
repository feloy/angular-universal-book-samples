import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {ServerTransferStateModule} from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
@NgModule({
  imports: [
          AppModule,
          ServerModule,
          ServerTransferStateModule
  ],
  bootstrap: [
          AppComponent
  ]
})
export class AppServerModule {}
