import { Injectable } from '@angular/core';
import { InvoiceItem, NewInvoiceItem } from '../components/models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceList: InvoiceItem[] = [
    {
      Date: new Date('2018-02-12T00:00:00'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 100000
    },
    {
      Date: new Date('2018-02-12T00:00:00'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 200000
    },
    {
      Date: new Date('2018-02-12'),
      Subject: 'January',
      Retrieving: true,
      Amount: 500,
      Iban: 'PT1234567765434567',
      Id: 300000
    }
  ];


  constructor() { }

  getInvoiceList(): InvoiceItem[] {
    // dummy service
    return this.invoiceList;
  }


  addInvoice(newInvoice: NewInvoiceItem) {
    // dummy service
    const newInvoiceAux: InvoiceItem = {
      Date: newInvoice.Date,
      Subject: newInvoice.Subject,
      Retrieving: newInvoice.Retrieving,
      Amount: newInvoice.Amount,
      Id: Date.now()
    };
    this.invoiceList.push(newInvoiceAux);
  }

  editInvoice(editedInvoice: InvoiceItem) {
    this.invoiceList.forEach(invoice => {
      if (invoice.Id === editedInvoice.Id) {
        const invoiceId: number = invoice.Id;
        invoice = editedInvoice;
        invoice.Id = invoiceId;
      }
    });
  }

  removeInvoice(invoiceToRemove: InvoiceItem) {
    this.invoiceList.forEach((invoice, index) => {
      if (invoice.Id === invoiceToRemove.Id) {
        this.invoiceList.splice(index, 1);
      }
    });
  }

  getInvoice(invoiceId: number) {
    let invoiceAux: InvoiceItem;
    this.invoiceList.forEach(invoice => {
      if (invoice.Id == invoiceId) {
        invoiceAux = invoice;
      }
    });

    return invoiceAux;
  }
}

