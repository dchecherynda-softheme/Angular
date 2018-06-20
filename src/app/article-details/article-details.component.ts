import { Component } from '@angular/core';

@Component({
  selector: 'app-art-detail',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {
  article = {
    id: 1,
    title: 'Як знімали рекламу Apple в Україні',
    shortDescription: 'Режисер кліпу Rolling in the Deep, скейтер з Іспанії та оператор на роликах з Південної Африки.'
  };
  heading: string;

  isClicked: boolean = true;

  changeColor() {
    this.isClicked = !this.isClicked;
  }
}
