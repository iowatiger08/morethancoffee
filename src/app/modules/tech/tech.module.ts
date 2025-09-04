import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    TechComponent
  ]
})
export class TechModule { }
