import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts = [
    {
      data: '2018-02-12',
      rent: 'January',
      amount: '500',
      iban: 'PT1234567765434567'
    },
    {
      data: '2018-12-11',
      rent: 'February',
      amount: '500',
      iban: 'PT1234667765434567'},
    {
      data: '2018-02-12',
      rent: 'December',
      amount: '500',
      iban: 'PT1234667765412167'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
