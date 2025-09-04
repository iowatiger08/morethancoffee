import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
