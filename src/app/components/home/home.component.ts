import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app/app.service';
import { UserService } from './../../services/user/user.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [                    
          style({transform: 'translateX(-100%)'}),
          animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('flyDown',[
      state('in',style({transform:'translateY(0)'})),
      transition(':enter',[ //:enter means void => *
          style({transform:'translateY(-100%)'}),
          animate(400)
      ]),
      transition(':leave',[ //:leave means * => void
        animate(400,style({transform:'translateY(100%)'}))
      ])                                        
    ])
  ]
})
export class HomeComponent implements OnInit {

  
  title:string;
  count:number;
  
  constructor(private appService:AppService, private userService:UserService) {
    this.title = this.appService.title;
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users.length);
      this.count = users.length;
    })
  }

}
