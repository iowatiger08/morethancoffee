import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CafeComponent } from './cafe.component';


@NgModule({
  declarations: [CafeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class CafeModule { }
