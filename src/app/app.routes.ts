import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadComponent:() => import('./pages/main/main.component').then(mod  => mod.MainComponent),
        title: 'LanderX',
    },
    {
        path: 'contact', 
        loadComponent:() => import('./pages/contact/contact.component').then(mod  => mod.ContactComponent),
        title: 'contact',
    },
    {
        path: '', 
        loadComponent:() => import('./pages/page-not-found/page-not-found.component').then(mod  => mod.PageNotFoundComponent),
        title: '404',
    }
];
