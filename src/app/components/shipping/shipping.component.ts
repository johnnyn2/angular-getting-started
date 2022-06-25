import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ en_type:string, zh_type:string, price: number }[]>;
  constructor(
    private cartService: CartService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  getLang() {
    return this.languageService.getLang();
  }
}
