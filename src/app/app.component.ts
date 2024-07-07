import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularHttpModule';
  userList : User[] =[];
 


  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe((resp: User[]) => {
        console.log(resp);
        this.userList =resp;
      });
  }
}
