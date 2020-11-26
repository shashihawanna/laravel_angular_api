import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  public errors = null;

  constructor(
    private Jarwis:JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    ) { }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthSatus(true);
    this.router.navigateByUrl('/profile');
  }
  handleError(error: any){
    this.errors= error.error.error;
  }

  ngOnInit(): void {
  }

}
