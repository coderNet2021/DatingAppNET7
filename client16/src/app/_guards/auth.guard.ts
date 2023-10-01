import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = Inject(AccountService);
  const toastr = Inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user=>{
      if(user) return true;
      else{
        toastr.error('you shall not pass!');
        return false;
      }
    })
  );
};
