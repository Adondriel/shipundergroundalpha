import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './article/articles/articles.component';
import { ShowArticleComponent } from './article/show-article/show-article.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ShowArticleComponent,
    AddArticleComponent,
    EditArticleComponent,
    HomeComponent,
    ProfessorComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
