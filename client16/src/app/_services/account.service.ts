import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  BaseUrl = 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }
  login(model:any){
    return this.http.post(this.BaseUrl+'account/login',model);
  }
}
