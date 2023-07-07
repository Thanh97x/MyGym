import { AddCoachComponent } from '././add-coach/add-coach.component';
import { LandingpageComponent } from './landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LandingpageComponent,
        children: [
          { path: 'coach', component: AddCoachComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
