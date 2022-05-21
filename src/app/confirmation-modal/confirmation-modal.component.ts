import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Input} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent  {

  @Input() public unit:any;
  constructor(public modalRef: MDBModalRef,public activeModal: NgbActiveModal,private router:Router) {}
  confirmation() {
    alert("Payment Successful!!!    Flight Booked.");
  }
}
