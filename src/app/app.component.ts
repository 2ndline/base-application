import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { MenuService } from './services/menu.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'base-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'BaseApplication';
  menuItems: MenuItem[];
  constructor(
    public menuService: MenuService,
    private dataService: DataService
  ) {
    this.menuItems = menuService.getMenuItems();

    var row = {
      _id: new Date().toISOString(),
      action: 'AppComponent constructor',
    };
    this.dataService.put(row);
  }
}
