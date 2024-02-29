import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar.component';
import { PaymentsService } from '../../Services/payments.service';
import { Payment } from '../../Interface/Payment';

@Component({
  selector: 'payments',
  standalone: true,
  imports: [CommonModule, RouterModule,Navbar],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {

  Payment!:Payment;
  
  BidId!:string;

  constructor(private payment:PaymentsService){}

  ngOnInit(): void {
      
  }

  AddPayment(){

  }

}
