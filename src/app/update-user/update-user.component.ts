import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!:number;
  userUpdate: User =  new User();;
  constructor(private route: ActivatedRoute,
    private router: Router,private userService:UserService) { }
 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.viewUser(this.id).subscribe(data => {
      this.userUpdate = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.userService.updateUser(this.id, this.userUpdate).subscribe(data => {
     this.goToUserList();
    }, error => console.log(error));
    
  }
  goToUserList(){
    this.router.navigate(['/viewuser']);
  }

}
