import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  bus!: Observable<any>;
  type!:string;
  bustype: any;
  buses: any;
  constructor(private route: ActivatedRoute,
    private router: Router,private busService:BusService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.bus=this.busService.viewAllBus();
  }
  deletebus(busId: number) {
    this.busService.deleteBus(busId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  public viewBusByType(){
    let resp= this.busService.viewBusByType(this.type);
    resp.subscribe((data)=>this.buses=data);
  }
  
  viewbus(busId:number){
    this.router.navigate(['bus-details',busId]);
  }

  updatebus(id: number){
    this.router.navigate(['updatebus',id]);
  }
}
