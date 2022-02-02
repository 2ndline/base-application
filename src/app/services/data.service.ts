import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private pouchDb: any;
  private initiatedDb = false;
  private databaseName = 'system';
  constructor() {
    if (!this.initiatedDb) {
      this.initiatedDb = true;
      this.pouchDb = new PouchDB(this.databaseName);
    }
  }

  public put(row: any): void {
    this.pouchDb.put(row);
  }
}
