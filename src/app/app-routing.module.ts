import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard1Guard } from './guards/guard1.guard';
import { Guard2Guard } from './guards/guard2.guard';
import { Guard3Guard } from './guards/guard3.guard';
import { Guard4Guard } from './guards/guard4.guard';
import { Mod1Component } from './mod1/mod1.component';
import { Mod2Component } from './mod2/mod2.component';
import { Mod3Component } from './mod3/mod3.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: Mod1Component,
    loadChildren: './mod1/mod1.module#Mod1Module',
    pathMatch: 'full',
  },
  {
    path: 'mod1',
    component: Mod1Component,
    canActivate: [Guard1Guard],
    canDeactivate: [Guard2Guard],
    canActivateChild: [Guard4Guard],
    children: [
      {
        path: ':param1',
        component: Mod1Component,
        loadChildren: () =>
          import('./mod1/mod1.module').then((mod) => mod.Mod1Module),
        canLoad: [Guard3Guard]
      },
      {
        path: ':param1/:param2/:param3',
        component: Mod1Component,
        loadChildren: () =>
          import('./mod1/mod1.module').then((mod) => mod.Mod1Module),
        canLoad: [Guard3Guard]
      },
    ],
  },
  {
    path: 'mod2',
    component: Mod2Component,
    loadChildren: () =>
      import('./mod2/mod2.module').then((mod) => mod.Mod2Module),
  },
  {
    path: 'mod3',
    component: Mod3Component,
    loadChildren: () =>
      import('./mod3/mod3.module').then((mod) => mod.Mod3Module),
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
