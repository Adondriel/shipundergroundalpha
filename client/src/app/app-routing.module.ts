import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './article/articles/articles.component';
import { ShowArticleComponent } from './article/show-article/show-article.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'professors',
    component: ArticlesComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'professor/:id',
    component: ShowArticleComponent,
    data: { title: 'Show Product' }
  },
  {
    path: 'add-professor',
    component: AddArticleComponent,
    data: { title: 'Add Article' }
  },
  {
    path: 'edit-professor/:id',
    component: EditArticleComponent,
    data: { title: 'Edit Article' }
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
