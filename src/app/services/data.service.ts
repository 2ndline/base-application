import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root',
})
/**
 * DataService - service for persisting values to NoSQL storage.
 *
 * Current implementation uses PouchDB for local storage & persistence
 */
export class DataService {
  private pouchDb: any;
  private initiatedDb = false;
  private databaseName = 'system'; //TODO: prepend hostname from config
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
