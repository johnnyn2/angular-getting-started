import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/service/cart.service';
import { LanguageService } from 'src/app/service/language.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.languageService.translate(msg => window.alert(msg), 'order-submit-msg');
    this.checkoutForm.reset();
  }

  getLang() {
    return this.languageService.getLang()
  }
}
