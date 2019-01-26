import { Component, OnInit } from '@angular/core';
import { InvoiceItem } from '../models/invoice.model';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  retrieving: boolean;
  date: Date;
  subject: string;
  amount: number;


  constructor() { }

  ngOnInit() {
  }

  submit() {
    const newInvoice: InvoiceItem = {
      Date : this.date,
      Subject : this.subject,
      Retrieving : this.retrieving,
      Amount : this.amount
    };
  }

}
