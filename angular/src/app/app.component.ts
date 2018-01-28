import { Component } from '@angular/core';
import { SessionService } from 'app/common/session.service';
import Util from 'app/common/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent {
  title = 'app';

  constructor(private session: SessionService) { }

  ngOnInit() {
    if (Util.isSessionExist()) {
      this.session.isLoggedIn = true;
      this.session.user = Util.getSession();
    } else {
      this.session.isLoggedIn = false;
      this.session.user = null;
    }
  }
}
