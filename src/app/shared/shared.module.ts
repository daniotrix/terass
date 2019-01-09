import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})
export class SharedsModule { }
