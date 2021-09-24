import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(email: string, password: string) {
    const body = new HttpParams()
      .set('email', email)
      .set('password', password)
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpClient.post('http://localhost:8080/login',body.toString(), { headers: headers, responseType: 'text' }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);
          let data = userData.split("END")
          let token = data[1]
          sessionStorage.setItem('token', 'Bearer ' + token);
          sessionStorage.setItem('role', data[0])
          console.log(email)
          console.log(data[0])
          console.log(userData)
          return userData;
        }
      )

    );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('token')
  }
}