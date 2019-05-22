import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Credentials} from '../../shared/models/credentials';

declare let jQuery: any;
declare let swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.less'],
})
export class LoginComponent implements OnInit {


  credentials: Credentials;

  ngOnInit() {

  }

  constructor(private router: Router) {
    this.credentials = new Credentials();

  }


  login() {

    console.log(this.credentials);
    this.router.navigate(['/manage-voiture/list']);

  }

}


