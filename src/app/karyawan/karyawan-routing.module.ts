import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaryawanComponent } from './karyawan.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }, { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaryawanRoutingModule { }
