import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MDBBootstrapModulesPro, MDBModalRef } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { MdbModalRef, MdbModalModule  } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogInComponent,
    HomePageComponent,
    FlightDetailsComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [MDBSpinningPreloader,MDBModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
