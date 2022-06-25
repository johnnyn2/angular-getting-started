export interface Product {
  id: number;
  en_name: string;
  zh_name: string;
  price: number;
  en_description: string;
  zh_description: string;
}

export const products = [
  {
    id: 1,
    en_name: 'Phone XL',
    zh_name: '大型號電話',
    price: 799,
    en_description: 'A large phone with one of the best screens',
    zh_description: '大電話及棒極了的屏幕'
  },
  {
    id: 2,
    en_name: 'Phone Mini',
    zh_name: '迷你電話',
    price: 699,
    en_description: 'A great phone with one of the best cameras',
    zh_description: '棒極了的電話及最好的鏡頭'
  },
  {
    id: 3,
    en_name: 'Phone Standard',
    zh_name: '標準電話',
    price: 299,
    en_description: '',
    zh_description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/