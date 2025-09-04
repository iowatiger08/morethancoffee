import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/components/constants.component';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  siteName = Constants.SITE_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
