import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

export class User {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}*/

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }



  getMessage() {
    let token = sessionStorage.getItem('token')

    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    const headers = new HttpHeaders({ Authorization: token });
    return this.httpClient.get('http://localhost:8080/secure/user/users', { headers, responseType: 'text' });
  }

  

  
}