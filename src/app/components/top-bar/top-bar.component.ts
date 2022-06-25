import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
  }

  setLang(lang: string) {
    this.languageService.setLang(lang);
  }
}
