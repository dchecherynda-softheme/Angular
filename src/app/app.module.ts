import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ListComponent } from './list/list.component';
import { ListDataService } from './list/list-data.service';
import { ListDetailsComponent } from './list/list-details/list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
