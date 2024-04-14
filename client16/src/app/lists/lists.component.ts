import { Component } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { Member } from '../_models/member';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  members: Member[] | undefined;
  predicate = 'liked';
  constructor(private memberService :MembersService ){

  }
  loadLikes() {
    this.memberService.getLikes(this.predicate).subscribe({
      next: response => {
        this.members = response;
      }
    })
  }

}
