import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dsahboard'}},
            {path: 'progress', component: ProgresComponent, data: { titulo: 'Progress'}},
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}},
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'}},
            {path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario'}},
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);