import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare let jQuery: any;
declare let swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.less'],
})
export class LoginComponent implements OnInit {


  ngOnInit() {

  }

  constructor(private router: Router) {

  }

}


