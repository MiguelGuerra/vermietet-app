import { Component, OnInit, Input } from '@angular/core';
import { InvoiceItem, NewInvoiceItem } from '../../models/invoice.model';
import { InvoiceService } from 'src/app/_services/invoice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edir-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  invoice: InvoiceItem;
  invoiceId: number;

  constructor(private router: Router, private invoiceService: InvoiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.invoiceId = params['id'];
    });

    this.invoice = this.invoiceService.getInvoice(this.invoiceId);
    console.log(this.invoice);
  }

  submit() {
    const editedInvoice: InvoiceItem = {
      Date : this.invoice.Date,
      Subject : this.invoice.Subject,
      Retrieving : this.invoice.Retrieving,
      Amount : this.invoice.Amount,
      Id: this.invoiceId
    };

    this.invoiceService.editInvoice(editedInvoice);

    this.router.navigate(['']);
  }

}
