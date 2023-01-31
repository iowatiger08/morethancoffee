import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { BloggerService } from './modules/word/blogger.service';
import { WordModule } from './modules/word/word.module';
import { TechModule } from './modules/tech/tech.module';
import { CafeModule } from './modules/cafe/cafe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    WordModule,
    TechModule,
    CafeModule
  ],
  providers: [BloggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
