import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { Mod2Service } from './mod2.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostInterceptor } from '../interceptors/post.interceptor';

@NgModule({
  declarations: [Mod2Component],
  imports: [CommonModule, HttpClientModule],
  providers: [
    Mod2Service,
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptor, multi: true },
  ],
  exports: [Mod2Component],
})
export class Mod2Module {}
