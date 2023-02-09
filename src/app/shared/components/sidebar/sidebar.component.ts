import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  HOME = Constants.HOME_LABEL;

  constructor() { }

  ngOnInit(): void {
  }

}
