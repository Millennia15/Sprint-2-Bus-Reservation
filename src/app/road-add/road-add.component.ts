import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Road } from '../road';
import { RoadService } from '../road.service';

@Component({
  selector: 'app-road-add',
  templateUrl: './road-add.component.html',
  styleUrls: ['./road-add.component.css']
})
export class RoadAddComponent implements OnInit {
  road: Road = new Road();
  submitted = false;

  constructor(private roadService: RoadService,  private router: Router) { }

  ngOnInit() {
  }

  newRoad(): void {
    this.submitted = false;
    this.road = new Road();
  }

  save() {
    this.roadService.addRoad(this.road).subscribe(data => {
      console.log(data)
      this.road = new Road();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Roads']);
  }
}