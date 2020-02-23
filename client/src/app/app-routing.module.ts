import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowArticleComponent } from './article/show-article/show-article.component';
import { HomeComponent } from './home/home.component';
import { ProfessorsComponent } from './professor/professors/professors.component';

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
    component: ShowArticleComponent,
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
