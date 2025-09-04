import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    RouterLink
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output () toggleSidebarEmitter :EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  toggleSidebar(){
      this.toggleSidebarEmitter.emit();
  }
}
