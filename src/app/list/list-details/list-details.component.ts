import { Component,Input, EventEmitter, Output } from '@angular/core';

import {ArticleModel} from './article.model'

@Component({
  selector: 'article-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent{

  @Input()
  article: ArticleModel;
}
