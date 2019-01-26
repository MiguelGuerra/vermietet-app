import { Component, OnInit } from '@angular/core';
import { InvoiceItem, NewInvoiceItem } from '../../models/invoice.model';
import { InvoiceService } from 'src/app/_services/invoice.service';
import { Router } from '@angular/router';

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


  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  submit() {
    const newInvoice: NewInvoiceItem = {
      Date : this.date,
      Subject : this.subject,
      Retrieving : this.retrieving,
      Amount : this.amount
    };

    this.invoiceService.addInvoice(newInvoice);

    this.router.navigate(['']);
  }

}
