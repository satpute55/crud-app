import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
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
  deleteRecord(id: string, index: number) {
    const selection = confirm("Are you Sure");
    if (selection) {
      const endPoint = "bookings-one/" + id;
      this.bookingsvc.deleteDataFromServer(endPoint).subscribe({
        next: () => {
          console.log("Delete Record Successfully");
         // this.getBookings();
         this.bookingList.splice(index,1);
        },

        error: (error) => {
          if(error.error instanceof ErrorEvent){
            console.log("Client Side Error "+ error.error.message);
          }else {
            console.log("Server Side Error " + error.message);
          }
        }
      })
    }
  }
}



