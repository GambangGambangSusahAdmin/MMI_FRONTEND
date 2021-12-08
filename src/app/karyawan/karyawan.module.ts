import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaryawanRoutingModule } from './karyawan-routing.module';
import { KaryawanComponent } from './karyawan.component';


@NgModule({
  declarations: [
    KaryawanComponent
  ],
  imports: [
    CommonModule,
    KaryawanRoutingModule
  ]
})
export class KaryawanModule { }
