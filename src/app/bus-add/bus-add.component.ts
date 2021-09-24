import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-add',
  templateUrl: './bus-add.component.html',
  styleUrls: ['./bus-add.component.css']
})
export class BusAddComponent implements OnInit {
  bus: Bus = new Bus();
  submitted = false;
  constructor(private busService: BusService,  private router: Router) { }

  ngOnInit() {
  }

  newBus(): void {
    this.submitted = false;
    this.bus = new Bus();
  }

  save() {
    this.busService.addBus(this.bus).subscribe(data => {
      console.log(data)
      this.bus = new Bus();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Bus']);
  }
}
