import { Component, Input, OnInit } from '@angular/core';
import { Customer, LineItem } from './models';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartForm!: FormGroup
  itemArray!: FormArray

  @Input()
  cart!: LineItem[]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.createForm()
  }

  // form binding creation
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      address: this.fb.control<string>('', [Validators.required]),
      delivery: this.fb.control<string>('', [Validators.required]),
      lineItems: this.itemArray
    })
  }

  saveForm() {
    const customer = this.cartForm.value as Customer
    console.info(">>> CUSTOMER", customer)
  }
}
