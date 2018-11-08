import {Component, OnInit} from '@angular/core';
import {GlobalVariablesService} from '../../util/global-variables.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coba: string;
  constructor(private globalVar: GlobalVariablesService) {
  }


  ngOnInit() {
    console.log(this.globalVar.baseApiUrl);
  }

}
