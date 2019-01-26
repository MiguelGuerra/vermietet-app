import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountListComponent } from './components/home/account-list/account-list.component';
import { AddInvoiceComponent } from './components/home/add-invoice/add-invoice.component';
import { FormsModule } from '@angular/forms';
import { EditInvoiceComponent } from './components/home/edit-invoice/edit-invoice.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountListComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
