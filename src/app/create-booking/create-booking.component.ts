import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
bookingObj:Booking=new Booking();
selectedBookingId:string|null=null;
editBooking:string|null=null;
constructor(private bookingSvc:BookingService,private router:Router,private activatedRouter:ActivatedRoute){
this.selectedBookingId=this.activatedRouter.snapshot.paramMap.get("id");
this.editBooking=this.activatedRouter.snapshot.paramMap.get("edit");

console.log(this.selectedBookingId);
console.log(this.editBooking);
}

ngOnInit(){
  if(this.editBooking){
    this.getBookingById();

  }


}
getBookingById(){
  const endPoint="bookings/"+this.selectedBookingId;
  this.bookingSvc.getDataFromServer(endPoint).subscribe({
    next:(response:any)=>{
      console.log("response",response);
      this.bookingObj={...response};

    },
    error:(error)=>{

    }


  })
}
saveBooking(){
  if(this.editBooking){
    this.updateBooking();
  }else{
    this.createBooking();
  }

}

createBooking(){
  console.log("from data" ,this.bookingObj);
  this.bookingSvc.postDataToServer("bookings",this.bookingObj).subscribe({
    next:(Response:any)=>{
      console.log("Data saved Successfully");
      this.router.navigate(["/booking-list"]);

    },
    error:()=>{

    }

  })
  console.log("create booking completed")
}

updateBooking(){
  const endPoint="bookings/"+ this.selectedBookingId;
  this.bookingSvc.putDataToServer(endPoint,this.bookingObj).subscribe({
    next:(Response:any)=>{
      console.log("Data updated successfully");
      this.router.navigate(["/booking-list"]);

    },
    error:(error)=>{
      console.log("error");

    }


  })
}

  
}
class Booking{
  source:string="";
  destination:string="";
  name:string="";
  date:string="";
}

  







