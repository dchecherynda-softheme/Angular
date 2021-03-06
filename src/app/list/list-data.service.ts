import { Injectable } from '@angular/core';

import { ArticleModel } from './list-details/article.model';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {
  articles: ArticleModel[] = [{
    id: 1,
    title: 'Як знімали рекламу Apple в Україні',
    shortDiscription: 'Режисер кліпу Rolling in the Deep, скейтер з Іспанії та оператор на роликах з Південної Африки',
  }, {
    id: 2,
    title: 'Електронне свідоцтво про народження: що це та як скористатися послугою',
    shortDiscription: 'Зареєструвати новонародженого онлайн в Україні тепер можна прямо у пологовому будинку, – повідомили у Міністерстві юстиції.'+
    'Також батькам малюків буде доступна ще низка реєстраційних послуг',
  }, {
    id: 3,
    title: 'Омега-3: все, що ви маєте знати про популярний додаток',
    shortDiscription: 'Про користь та шкоду біологічно-активних добавок у раціоні не говорить хіба що лінивий.'+
     'Деякі фахівці радять обов’язково включати їх у свій раціон, інші – не заморочуватись і збалансувати харчування. Але, коли розмова заходить про Омега-3, практично усі вважають її справжньою панацеєю від багатьох хвороб.'+
     'Чому це так і в чому правда, давайте розбиратися разом з нами',
  }, {
    id: 4,
    title: 'Пляжі та відкриті басейни Києва: ціни, недоліки та переваги',
    shortDiscription: 'Кращі річкові та озерні пляжі Києва і відкриті басейни столиці, де можна купатись цього року та весело провести час!'+
     'Ми оцінили чистоту, вивчили інфраструктуру навколо і, звичайно ж, ціни. У нашому списку кожен знайде щось для себе!',
  }];

  getArticles​() {
    return this.articles;
  }
}
