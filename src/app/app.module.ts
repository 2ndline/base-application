import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [MenuService],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
