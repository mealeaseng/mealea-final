import { Component, inject } from '@angular/core';
import { ProductCart } from '../product-cart/product-cart';
import { RouterLink } from '@angular/router';
import { Total } from '../total/total';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  imports: [ProductCart, RouterLink, NgIf],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  product: any [] = []
  cart: any[] = [];
  total: number = 0;
  http = inject(HttpClient)
  product_cart: any[] = []


addproductCart(cartproduct: any) {
    const existingProductIndex = this.cart.findIndex(
      (p) => p.id === cartproduct.id
    );

    if (existingProductIndex > -1) {
      this.cart[existingProductIndex].addcart += 1;
    } else {
      cartproduct.addcart = 1;
      this.cart.push(cartproduct);
    }

    this.total = this.cart.reduce((acc, item) => acc + item.addcart, 0);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('total', JSON.stringify(this.total));

    // Update quantity mapping for reload support
    const addcartMap = this.cart.reduce((map, item) => {
      map[item.id] = item.addcart;
      return map;
    }, {} as Record<number, number>);
    localStorage.setItem('productAddCartMap', JSON.stringify(addcartMap));
  }



ngOnInit() {
  this.GetApi()
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');

    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.total = storedTotal ? JSON.parse(storedTotal) : 0;
}



clearproduct() {
  Swal.fire({
    title: 'Are you sure?',
    text: "This will clear all items from your cart.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, clear cart!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Clear cart data
      this.cart = [];
      this.total = 0;
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
      localStorage.removeItem('productAddCartMap');

      // Reset qtyCart on products array
      this.product_cart = this.product_cart.map(item => ({
        ...item,
        qtyCart: 0
      }));

      Swal.fire({
        title: 'Cleared!',
        text: "All products have been removed from your cart.",
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}

  GetApi() {
        this.http
      .get('https://dummyjson.com/products')
      
      .subscribe((response: any) => {
        console.log(response);
        this.product_cart = response.products;
      });
  }

//   GetApi() {
//   this.http
//     .get<any[]>('https://sv-gen-api.bczin2zin2takeo.us/api/product')
//     .subscribe({
//       next: (response) => {
//         console.log('Product API response:', response);
//         this.product_cart = response;
//       },
//       error: (err) => {
//         console.error('API Error:', err);
//         Swal.fire('Error', 'Failed to load products from server.', 'error');
//       }
//     });
// }
}
