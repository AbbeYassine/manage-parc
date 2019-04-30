import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(
    private router: Router) {

  }

  ngOnInit() {

  }
}
