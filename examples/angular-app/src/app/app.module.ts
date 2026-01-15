import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LuxModule } from '@lux/components/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LuxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
