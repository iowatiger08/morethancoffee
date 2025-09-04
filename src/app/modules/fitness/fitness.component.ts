import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatDivider
  ],
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
