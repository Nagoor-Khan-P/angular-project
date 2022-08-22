import { Component, OnInit } from '@angular/core';
import { DummyUser } from '../commom/dummy-user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dummy-user',
  templateUrl: './dummy-user.component.html',
  styleUrls: ['./dummy-user.component.css']
})
export class DummyUserComponent implements OnInit {
  date:Date=new Date();
  dummyUsers:DummyUser[]=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllToDos().subscribe(
      positiveResponse=>{
        this.dummyUsers=positiveResponse;
      },
      negativeResponse=>{
        console.log(negativeResponse);
      }
    )
  }

}
