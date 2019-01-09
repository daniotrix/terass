import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedsModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgresComponent,
        Graficas1Component
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgresComponent,
        Graficas1Component
    ], imports: [SharedsModule, PAGES_ROUTES]
})
export class PagesModule { }
