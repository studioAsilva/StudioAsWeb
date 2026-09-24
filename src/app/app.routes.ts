import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home-page'),
  },
  {
    path: 'produtos',
    loadComponent: () => import('@features/products/products-page'),
  },
  { path: '**', redirectTo: '' },
];
