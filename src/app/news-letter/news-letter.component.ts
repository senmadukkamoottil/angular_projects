import { Component, OnInit } from '@angular/core';
import { NewsLetter } from './news-letter';


@Component({
  selector: 'pm-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent implements OnInit {
  public newsLetterObj: NewsLetter;
  constructor() {
    this.newsLetterObj = new NewsLetter();
  }

  ngOnInit() {
  }

  submitForm(newsLetterForm) {
    console.log(newsLetterForm.value);
  }

}
