import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Product, products } from 'src/app/data/products';
import { CartService } from 'src/app/service/cart.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.languageService.translate(msg => window.alert(msg), 'add-product-msg');
  }

  getLang() {
    return this.languageService.getLang();
  }
}
