import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatDivider
  ],
  styleUrls: ['./outreach.component.scss']
})
export class OutreachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
