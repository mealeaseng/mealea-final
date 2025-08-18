import { DecimalPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-total',
  imports: [DecimalPipe, NgIf],
  templateUrl: './total.html',
  styleUrl: './total.css'
})
export class Total {
    productCartAll: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        this.productCartAll = Array.isArray(parsed) ? parsed : [];
      } catch (err) {
        console.error('Invalid cart data:', err);
      }
    }
  }

  totalQuantity(): number {
  return this.productCartAll.reduce((total, item) => total + (item.addcart || 0), 0);
}

totalPrice(): number {
  return this.productCartAll.reduce((total, item) => {
    const discountedPrice = item.price * (1 - (item.discountPercentage || 0) / 100);
    return total + discountedPrice * (item.addcart || 0);
  }, 0);
}
sweetalert() {
  Swal.fire({
      title: 'Order Confirmed!',
      text: 'Your purchase was successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
}
}
