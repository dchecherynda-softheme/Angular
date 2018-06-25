import { Component, Input } from '@angular/core';

import { ArticleModel } from './article-details.model';

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {
  @Input()
  article: ArticleModel;

  heading: string;
  isClicked = true;

  changeColor() {
    this.isClicked = !this.isClicked;
  }
}
