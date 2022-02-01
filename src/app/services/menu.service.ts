import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems: MenuItem[] = [
    {
      routerLink: '/about',
      Title: 'About',
    },
    {
      routerLink: '/prices',
      Title: 'Prices',
    },
    {
      routerLink: '/start-page',
      Title: 'Start page',
    },
    {
      routerLink: '/offer',
      Title: 'Offer',
    },
  ];
  constructor() {}

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
