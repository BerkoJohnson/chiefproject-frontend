import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, ContentComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
})
export class UiModule { }
