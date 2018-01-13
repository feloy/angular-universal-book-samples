import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule],  declarations: []
})
export class MyMaterialModule { }
