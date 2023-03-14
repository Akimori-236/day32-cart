import { Component, OnInit, Output } from '@angular/core';
import { Customer, LineItem } from './components/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'day32-cart';
  customer!: Customer

  ngOnInit(): void {
    this.customer = {
      name: "",
      address: "",
      delivery: "",
      cart: []
    }
  }


  insertNewLineItem(li: LineItem) {
    this.customer.cart.push(li)
    console.info(">>> customer: ", this.customer)
  }


}
