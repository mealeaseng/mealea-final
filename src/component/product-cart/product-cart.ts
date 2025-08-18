import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css'
})
export class ProductCart implements OnInit, OnChanges {
  @Input() product: any;
  qtyCart: number = 0;
  @Output() adCart = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateQtyCartFromStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.updateQtyCartFromStorage();
    }
  }

  updateQtyCartFromStorage(): void {
    if (this.product && this.product.id) {
      const savedMap = localStorage.getItem('productAddCartMap');
      const qtyCartMap = savedMap ? JSON.parse(savedMap) : {};
      this.qtyCart = qtyCartMap[this.product.id] || 0;
    }
  }

  addCart(product: any): void {
    this.qtyCart += 1;
    product.qtyCart = this.qtyCart;

    this.adCart.emit({ ...product });

    const savedMap = localStorage.getItem('productAddCartMap');
    const qtyCartMap = savedMap ? JSON.parse(savedMap) : {};

    qtyCartMap[product.id] = this.qtyCart;
    localStorage.setItem('productAddCartMap', JSON.stringify(qtyCartMap));
  }
}
