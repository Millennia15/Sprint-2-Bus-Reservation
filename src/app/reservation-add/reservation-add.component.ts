import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {
  
  reservation: Reservation = new Reservation();
  submitted = false;
  bus!: Observable<any>;
  user!: Observable<any>;


  constructor(private reservationService: ReservationService, private userService: UserService,private busService: BusService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  
reloadData() {
    this.user = this.userService.viewAllUsers();
    this.bus = this.busService.viewAllBus();
  
    }
  newReservation(): void {
    this.submitted = false;
    this.reservation = new Reservation();
  }

  save() {
    this.reservationService.addReservation(this.reservation).subscribe(data => {
      console.log(data)
      this.reservation = new Reservation();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Reservation']);
  }
}