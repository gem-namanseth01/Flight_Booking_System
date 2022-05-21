import { Component} from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent  {

  flights = [
    {
      id: '1',
      name: 'Vistara',
      fromSm: 'DEL ',
      fromLg: 'New Delhi, India',
      toSm: 'BOM ',
      toLg: 'Mumbai, India',
      departure: '17:45',
      duration: '2h 20m',
      arrival: '20:05',
      price: '6253',
      emi: '2085',
      logo: 'vistara.png',
    },
    {
      id: '2',
      name: 'SpiceJet',
      fromSm: 'DEL ',
      fromLg: 'New Delhi,India',
      toSm: 'BOM ',
      toLg: 'Mumbai, India',
      departure: '18:35',
      duration: '2h 15m',
      arrival: '20:50',
      price: '7776',
      emi: '2592',
      logo: 'spiceJet.png',
    },
    {
      id: '3',
      name: 'SpiceJet',
      fromSm: 'DEL ',
      fromLg: 'New Delhi, India',
      toSm: 'BOM ',
      toLg: 'Mumbai, India',
      departure: '19:45',
      duration: '2h 20m',
      arrival: '22:05',
      price: '7776',
      emi: '2592',
      logo: 'spiceJet.png',
    },
  ];
  public asc:any;
  sortJson(value : number) {
    this.asc=!this.asc;
    if(value === 1) {
      this.asc ? this.flights.sort((flight1, flight2) => (flight1.departure > flight2.departure) ? 1 : -1) : this.flights.sort((flight1, flight2) => (flight1.departure > flight2.departure) ? -1 : 1);
    }
    else if(value === 2) {
      this.asc ? this.flights.sort((flight1, flight2) => (flight1.duration > flight2.duration) ? 1 : -1) : this.flights.sort((flight1, flight2) => (flight1.duration > flight2.duration) ? -1 : 1);
    }
    else if(value === 3) {
      this.asc ? this.flights.sort((flight1, flight2) => (flight1.arrival > flight2.arrival) ? 1 : -1) : this.flights.sort((flight1, flight2) => (flight1.arrival > flight2.arrival) ? -1 : 1);
    }
    else if(value === 4) {
      this.asc ? this.flights.sort((flight1, flight2) => (flight1.price > flight2.price) ? 1 : -1) : this.flights.sort((flight1, flight2) => (flight1.price > flight2.price) ? -1 : 1);
    }
  }
  modalRef: MDBModalRef | null = null;
  constructor(private modalService: NgbModal) {}
  openModal(obj:any) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.unit=obj;
  }
}
