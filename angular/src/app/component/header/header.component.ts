import { Component, OnInit } from '@angular/core';
import Util from 'app/common/util';
import { SessionService } from 'app/common/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit() {
  }


}
