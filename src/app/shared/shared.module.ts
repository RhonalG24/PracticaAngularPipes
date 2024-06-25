import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './components/menu/menu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
