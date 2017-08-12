import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {

  chartData;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsersData().subscribe(usersData => {
      this.chartData = usersData;
      console.log(this.chartData);
    });
  }

  

  
}
