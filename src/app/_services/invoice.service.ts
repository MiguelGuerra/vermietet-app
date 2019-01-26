import { Injectable } from '@angular/core';
import { InvoiceItem } from '../components/models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceList: InvoiceItem[] = [
    {
      Date: new Date('2018-02-12'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 1
    },
    {
      Date: new Date('2018-02-12'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 2
    },
    {
      Date: new Date('2018-02-12'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 3
    }
  ];


  constructor() { }

  getInvoiceList(): InvoiceItem[] {
    // dummy service
    return this.invoiceList;
  }


  addInvoice(newInvoice) {
    // dummy service
    newInvoice.Id = this.invoiceList.length + 1;
    this.invoiceList.push(newInvoice);
  }

  removeInvoice(invoiceToRemove) {
    this.invoiceList.forEach((invoice, index) => {
      if (invoice.Id === invoiceToRemove.id) {
        this.invoiceList.splice(index, 1);
      }
    });
  }

}
