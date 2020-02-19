import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { Article } from '../article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public professors: Article[];

  constructor(private articleService: ArticleService) { }

  async ngOnInit() {
    this.articleService.getArticles().subscribe((profs) => this.professors = profs);
  }

}
