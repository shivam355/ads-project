import { Component, OnInit } from '@angular/core';
import { IdPasswordTo } from 'app/class-to/id-password-to';
import { LoginService } from 'app/component/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  model: IdPasswordTo = new IdPasswordTo(null, null);

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log("submit : " + this.model.userName + " : " + this.model.password);
    this.service.login(this.model).subscribe(
      rjson => {
        if (!rjson) {
          console.log("rjson not valid");
          return;
        }
        this.router.navigate(['/home']);
      },
      error => { console.log("error: " + error); },
      () => { console.log("login request completed"); }
    );
  }
}
