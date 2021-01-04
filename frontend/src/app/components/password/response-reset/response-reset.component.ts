import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    reset_token: null,
  };
  public errors = {
    name: null,
    email: null,
    password: null,
  };
  constructor(
    private route: ActivatedRoute,
    private jarwis: JarwisService,
    private router: Router,
    private notify: SnotifyService
  ) {
    route.queryParams.subscribe(param => {
      this.form.reset_token = param['token']
    })
  }

  onSubmit() {
    this.jarwis.resetPassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }
  handleResponse(data: any) {
    let _router = this.router;
    this.notify.confirm('Done!, Now login with new password', {
      buttons: [
        {
          text: 'Okay',
          action: toster => [
            _router.navigateByUrl('/login'),
            this.notify.remove(toster.id)
          ]
        }
      ]
    })
  }
  handleError(error: any) {
    this.errors = error.error.errors;
  }

  ngOnInit(): void {
  }

}
