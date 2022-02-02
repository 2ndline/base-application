import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { MenuService } from './services/menu.service';
import * as PouchDB from 'pouchdb';

@Component({
  selector: 'base-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pouchdb: any;
  name = 'BaseApplication';
  menuItems: MenuItem[];
  constructor(public menuService: MenuService) {
    this.menuItems = menuService.getMenuItems();
    this.pouchdb = new PouchDB('pouchform');
  }
}
