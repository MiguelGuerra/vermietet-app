import { Component, OnInit } from '@angular/core';
import { InvoiceItem } from '../../models/invoice.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: InvoiceItem[];


  constructor() { }

  ngOnInit() {
  }

}
