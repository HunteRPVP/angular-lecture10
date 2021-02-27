import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Guard1Guard } from './guards/guard1.guard';
import { Guard2Guard } from './guards/guard2.guard';
import { Guard3Guard } from './guards/guard3.guard';
import { Guard4Guard } from './guards/guard4.guard';
import { Mod2Module } from './mod2/mod2.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod2Module
  ],
  providers: [Guard1Guard, Guard2Guard, Guard3Guard, Guard4Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
