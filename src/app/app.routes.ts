import { Routes } from '@angular/router';
import { Homepage } from '../component/homepage/homepage';
import { Navbar } from '../component/navbar/navbar';
import { Footer } from '../component/footer/footer';
import { Component } from '@angular/core';
import { ProductCart } from '../component/product-cart/product-cart';
import { Error } from '../component/error/error';
import { About } from '../component/about/about';
import { Service } from '../component/service/service';
import { Pricing } from '../component/pricing/pricing';
import { Contact } from '../component/contact/contact';
import { Total } from '../component/total/total';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Navbar,
    children: [
      {
        path: 'home',
        component: Homepage,
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'service',
        component: Service
      },
      {
        path: 'pricing',
        component: Pricing
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'total',
        component: Total
      }
    ],
  },

  {
    path: '**',
    component: Error,
  },

];
