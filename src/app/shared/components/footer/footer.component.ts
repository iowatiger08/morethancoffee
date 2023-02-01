import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
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
