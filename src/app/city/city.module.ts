import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'mumbai',component:MumbaiComponent},
  {path:'pune',component:PuneComponent}
]



@NgModule({
  declarations: [
    MumbaiComponent,
    PuneComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class CityModule { }
