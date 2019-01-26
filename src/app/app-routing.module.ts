import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AddInvoiceComponent } from './components/home/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './components/home/edit-invoice/edit-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-invoice',
    component: AddInvoiceComponent
  },
  {
    path: 'edit-invoice/:id',
    component: EditInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
