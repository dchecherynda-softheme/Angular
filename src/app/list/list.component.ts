import { Component } from '@angular/core';
import { ListDataService } from './list-data.service';
import { ArticleModel } from './list-details/article.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent {
  articles: ArticleModel[];

  constructor(private service: ListDataService) {
    this.articles = this.service.getArticles();
  }
}
