import { Routes } from '@angular/router';
import { LandingMenuComponent } from './components/layout/landing-menu/landing-menu.component';

export const routes: Routes = [
    {
        path: 'my_portfolio',
        component:LandingMenuComponent
        // loadChildren: () => import('./components/layout/landing-menu/landing-menu.component').then(m => m.LandingMenuComponent)
    },
    {
        path: '',
        redirectTo: '/my_portfolio',
        pathMatch: 'full'
    }
];
