import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  imports: [
    HeaderComponent,
    MatDrawerContainer,
    MatDrawer,
    SidebarComponent,
    MatDrawerContent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen =true;
  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(){
    this.sidebarOpen =!this.sidebarOpen;
  }
}
