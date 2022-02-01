import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'BaseApplication';
  welcome = 'Welcome to BaseApplication';
  menuItems: MenuItem[];
  constructor(public menuService: MenuService) {
    this.menuItems = menuService.getMenuItems();
  }
}
