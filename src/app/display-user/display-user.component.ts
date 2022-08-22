import { Component, OnInit } from '@angular/core';
import { Users } from '../common/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  users:Users[]=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      positiveResponse=>{
        this.users=positiveResponse;
      },
      negativeResponse=>{
        console.log(negativeResponse);
      }
    )
  }

}
