import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'app/common/session.service';
import Util from 'app/common/util';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
    this.logout();
  }


  logout(): void {
    Util.invalidateSession();
    this.session.isLoggedIn = false;
    this.session.user = null;
    this.router.navigate(['/']);
  }


}
