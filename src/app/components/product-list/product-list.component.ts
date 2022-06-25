import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  share() {
    this.languageService.translate(msg => window.alert(msg), 'share-product-msg');
  }

  onNotify() {
    this.languageService.translate(msg => window.alert(msg), 'product-on-sale-msg');
  }

  getLang() {
    return this.languageService.getLang();
  }
}
