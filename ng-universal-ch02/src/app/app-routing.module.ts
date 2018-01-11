import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { DetailsComponent } from './details/details.component';
import { SeoGuard } from './seo.guard';
import { SeoDetailsGuard } from './seo-details.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Home page'],
      desc: 'My First Static Website built with Angular Universal'
    }
  }, {
    path: 'element.html', component: MasterComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Elements List'],
      desc: 'My List of elements in my Static Website'
    }
  }, {
    path: 'element/:id', component: DetailsComponent,
    canActivate: [SeoDetailsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
