import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';
import  {FooterComponent} from '../footer/footer'


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent,
    SidebarComponent,FooterComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {}
