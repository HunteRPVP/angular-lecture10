import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lecture10';

  constructor(public router: Router) {}

  goToMod1(): void {
    this.router.navigate(['mod1']);
  }

  goToMod2(): void {
    this.router.navigate(['mod2']);
  }

  goToMod3(): void {
    this.router.navigate(['mod3']);
  }

  goToMod11111(): void {
    this.router.navigate(['mod1','1','1','1'], {queryParams: {q1: 1}});
  }

  goToMod13333(): void {
    this.router.navigate(['mod1','3','3','3'], {queryParams: {q1: 3}});
  }
}
