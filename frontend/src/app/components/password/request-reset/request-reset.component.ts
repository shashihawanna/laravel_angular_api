import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  constructor(
    private Jarwis:JarwisService,
    private notify:SnotifyService,
    private router:Router) {}

  onSubmit() {
    this.Jarwis.sendResetPasswordLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data: any){
    console.log(data);
    //this.router.navigateByUrl('/login');
  }
  handleError(error: any){
    this.notify.error(error.error.error);
  }

  ngOnInit(): void {
  }

}
