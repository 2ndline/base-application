import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems: MenuItem[] = [
    {
      routerLink: '/menu-one',
      Title: 'Menu One',
    },
    {
      routerLink: '/menu-two',
      Title: 'Menu Two',
    },
    {
      routerLink: '/menu-three',
      Title: 'Menu Three',
    },
  ];
  constructor() {}

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
