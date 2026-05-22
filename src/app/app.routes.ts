import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Rentals } from './pages/rentals/rentals';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'rentals',
        component: Rentals
    }
];
