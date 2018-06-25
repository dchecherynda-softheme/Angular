import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListService } from './articles-list/articles-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticlesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
