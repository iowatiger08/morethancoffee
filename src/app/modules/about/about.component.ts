import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/components/constants.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  siteName = Constants.SITE_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
