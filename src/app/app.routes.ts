import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Saved } from './pages/saved/saved';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'saved',
        component: Saved,
        canActivate: [authGuard]
    }
];
