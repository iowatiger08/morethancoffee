import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FitnessComponent } from 'src/app/modules/fitness/fitness.component';
import { MindfulnessComponent } from 'src/app/modules/mindfulness/mindfulness.component';
import { OutreachComponent } from 'src/app/modules/outreach/outreach.component';

import { AboutComponent } from 'src/app/modules/about/about.component';
import { WordModule } from 'src/app/modules/word/word.module';
import {TechModule } from 'src/app/modules/tech/tech.module';
import { CafeModule } from 'src/app/modules/cafe/cafe.module';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,

    FitnessComponent,
    MindfulnessComponent,
    OutreachComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    WordModule,
    CafeModule,
    TechModule
  ]
})
export class DefaultModule { }
