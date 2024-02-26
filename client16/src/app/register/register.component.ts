import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any={};
  registerForm: FormGroup = new FormGroup({});

  constructor(private accountService : AccountService,
    private toastr:ToastrService){

  }
initializeForm(){
  this.registerForm= new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  })
}
  ngOnInit(): void {
    this.initializeForm();

  }

  register(){
    console.log(this.registerForm?.value)
    // this.accountService.register(this.model).subscribe({
    //   next:()=>{
    //     //console.log(response);
    //     // if we want to keep it we should do return in the map of the account service , register method.
    //     this.cancel();
    //   },
    //   error: err=>{
    //     console.log(err);
    //     this.toastr.error(err.error.errors.Password);
    //   }
    // });
  }

  cancel(){
    console.log('Cancelled!');
    this.cancelRegister.emit(false);
  }

}
