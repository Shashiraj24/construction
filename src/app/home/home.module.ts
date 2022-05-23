import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FutureWorksComponent } from './future-works/future-works.component';
import { OffersComponent } from './offers/offers.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'future-works',component:FutureWorksComponent},
 { path:'offers', component:OffersComponent}
]

@NgModule({
  declarations: [
    AboutComponent,
    FutureWorksComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
  [RouterModule.forChild(routes)]
  ]
})
export class HomeModule { }
