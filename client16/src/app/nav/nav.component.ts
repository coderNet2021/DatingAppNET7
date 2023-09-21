import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  title ="Dating App 16";
  model : any={};
  //loggedIn=false;
  // currentUser$: Observable<User | null>= of(null);
  constructor(public accountService:AccountService){

  }
  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$
    // this.getCurrentUser();
  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe({
  //     next:user=>this.loggedIn=!!user,
  //     error:err=>console.log(err)
  //   })
  // }

  login(){
console.log(this.model);
this.accountService.login(this.model).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(err)=>{console.log(err)},
      //complete:
    });
  }
  logout(){
    this.accountService.logout();
  }
}
