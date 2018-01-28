import { Injectable } from '@angular/core';
import { SessionTo } from 'app/class-to/session-to';
import { MessageTo } from 'app/class-to/message-to';

@Injectable()
export class SessionService {
  constructor() { }

  public companyEmail: string = "info@varrange.xyz";
  public companyMobileNo: string = "(+91) 9999 03 8818";
  public isLoggedIn: boolean = false;
  public user: SessionTo = null;

  public msg: MessageTo = new MessageTo(false, null, null);


  public showMessage(msg: string, type: string) {
    this.msg =  new MessageTo(true, msg, type);
    setTimeout(() => {
      this.msg =  new MessageTo(false, msg, type);
    }, 4000);
  }



}
