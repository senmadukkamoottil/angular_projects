import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpBackend } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { NewsLetter } from './news-letter/news-letter';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewsLetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'news-letter', component : NewsLetterComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
