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
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { ProfessorsComponent } from './professor/professors/professors.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowArticleComponent,
    HomeComponent,
    NavbarComponent,
    ProfessorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
