import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild(FlightDetailsComponent, {static : true}) child! : FlightDetailsComponent; 
  public num:any;
  callMyChild(type:any){
    this.num = type;
    this.child.sortJson(type);
}
  constructor() { }

  ngOnInit(): void {
  }

}
