import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

  adminAuth: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.adminAuth = this.router.url.indexOf('admin') !== -1;
  }

}
