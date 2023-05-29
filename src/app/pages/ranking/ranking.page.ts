import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage {
  darkTheme: boolean = false;

  constructor() {}

  ngOnInit() {}

  changeTheme() {
    this.darkTheme = !this.darkTheme;

    if (this.darkTheme) {

      document.body.classList.add('dark-theme');
    } else {

      document.body.classList.remove('dark-theme');
    }
  }
}
