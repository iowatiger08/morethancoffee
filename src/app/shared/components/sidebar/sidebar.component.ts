import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants.component';
import { MatDivider} from '@angular/material/divider';
import {MatIcon} from '@angular/material/icon';
import {MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    MatDivider,
    MatIcon,
    MatNavList
  ],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  HOME = Constants.HOME_LABEL;

  constructor() { }

  ngOnInit(): void {
  }

}
