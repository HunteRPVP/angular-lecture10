import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component11Component } from './component11/component11.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'com11',
        component: Component11Component,
      }
    ])
  ],
  exports: [RouterModule],
})
export class Mod1RoutingModule {}
