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
    window.alert($localize`The product has been shared`)
  }

  onNotify() {
    window.alert($localize`You will be notified when the product goes on sale`);
  }

  getLang() {
    return this.languageService.getLang();
  }
}
