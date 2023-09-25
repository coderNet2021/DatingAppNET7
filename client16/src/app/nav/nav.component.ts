import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(public accountService:AccountService,
     private router:Router,
     private toastr:ToastrService){

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
      next:()=>{
        this.router.navigateByUrl('/members');
      },
      error:(err)=>{
        console.log(err)
        this.toastr.error(err.error);
      },
      //complete:
    });
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
