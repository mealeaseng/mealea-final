import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { MainNavbar } from '../main-navbar/main-navbar';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    Footer,
    MainNavbar
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

}
