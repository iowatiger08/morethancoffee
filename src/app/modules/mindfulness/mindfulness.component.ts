import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-mindfulness',
  templateUrl: './mindfulness.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatDivider
  ],
  styleUrls: ['./mindfulness.component.scss']
})
export class MindfulnessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
