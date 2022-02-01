import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashPageComponent } from './navigation/splash-page/splash-page.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SplashPageComponent],
  exports: [SplashPageComponent],
})
export class ComponentsModule {}
