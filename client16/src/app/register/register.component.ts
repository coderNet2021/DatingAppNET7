import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any={};

  constructor(private accountService : AccountService){

  }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next:()=>{
        //console.log(response);
        // if we want to keep it we should do return in the map of the account service , register method.
        this.cancel();
      },
      error: err=>console.log(err)
    });
  }

  cancel(){
    console.log('Cancelled!');
    this.cancelRegister.emit(false);
  }

}
