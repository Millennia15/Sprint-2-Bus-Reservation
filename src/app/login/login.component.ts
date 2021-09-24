import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  
  invalidLogin = false
  role: any;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    (this.loginservice.authenticate(this.email, this.password).subscribe(
      
        data => {
          this.role = sessionStorage.getItem('role')
          if(this.role === "admin") {
            this.router.navigate(['/admin-dash']);
          } else {
            this.router.navigate(['/user-dash'])
          }
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

}
