import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  lang: string = 'zh';
  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.addLangs(environment.supportLanguages);
    this.translateService.setDefaultLang(this.lang);
  }

  setLang(lang:string) {
    this.lang = lang;
    this.translateService.setDefaultLang(this.lang);
  }

  getLang() {
    return this.lang;
  }
}
