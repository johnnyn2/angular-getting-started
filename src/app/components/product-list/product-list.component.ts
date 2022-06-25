import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert($localize`The product has been shared`)
  }

  onNotify() {
    window.alert($localize`You will be notified when the product goes on sale`);
  }
}
