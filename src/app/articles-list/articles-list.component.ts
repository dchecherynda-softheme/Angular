import { Component } from '@angular/core';

import { ArticlesListService } from './articles-list.service';
import { ArticleModel } from '../article-details/article-details.model';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent {
  articles: ArticleModel[];

  constructor(private service: ArticlesListService) {
    this.articles = this.service.getArticles();
  }
}
