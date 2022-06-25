import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  lang: string = 'zh';
  supportedLanguages = ['en', 'zh'];
  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang(this.lang);
  }

  setLang(lang:string) {
    this.lang = lang;
    this.translateService.use(this.lang);
  }

  getLang() {
    return this.lang;
  }

  translate(cb: (res: string) => void, key: string, params?: {value:string}) {
    return this.translateService.get(key, params).subscribe((res: string) => cb(res));
  }
}
