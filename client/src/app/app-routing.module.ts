import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessorsComponent } from './professors/professors.component';
import { ViewProfessorComponent } from './view-professor/view-professor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'professor',
    component: ProfessorsComponent,
    data: { title: 'List of Professors' }
  },
  {
    path: 'professor/:id',
    component: ViewProfessorComponent,
    data: { title: 'Show Product' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
