import { Component, OnInit } from '@angular/core';
import { InvoiceItem } from '../../models/invoice.model';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: InvoiceItem[];


  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.accounts = this.invoiceService.getInvoiceList();
  }

}
