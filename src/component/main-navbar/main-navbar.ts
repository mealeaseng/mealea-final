import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  imports: [
    CommonModule,
    NgClass,
    RouterLink,
  ],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.css'
})
export class MainNavbar {
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
