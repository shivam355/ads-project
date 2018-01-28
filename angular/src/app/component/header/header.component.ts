import { Component, OnInit } from '@angular/core';
import Util from 'app/common/util';
import { SessionService } from 'app/common/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
  }


  logout(): void {
    Util.invalidateSession();
    this.session.isLoggedIn = false;
    this.session.user = null;
    this.router.navigate(['/']);
  }

}
