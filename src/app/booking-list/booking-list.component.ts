import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  bookingList:any=[];
  constructor(private bookingsvc: BookingService) {

  }

  ngOnInit() {
    this.bookingsvc.getDataFromServer("bookings").subscribe({
      next: (response) => {
        if(response && response.length > 0){
          this.bookingList = response;
          console.log("booking-list",this.bookingList);
        }  
      },

      error: (error) => {
          console.log(error);
      },
      complete: () => {

      }
    })
  }

}



