import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants.component';
import {MatCard} from '@angular/material/card';
import {MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    MatCard,
    MatNavList
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  siteName = Constants.SITE_NAME;

  currentYear: any;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
