import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Saved } from './pages/saved/saved';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'saved',
        component: Saved
    }
];
