import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private Jarwis: JarwisService,
    ) {
    route.queryParams.subscribe(param => {
      this.form.reset_token = param['token']
    })
  }

  onSubmit() {
    this.Jarwis.resetPassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }
  handleResponse(data: any) {
   
  }
  handleError(error: any) {
    this.errors = error.error.errors;
  }

  ngOnInit(): void {
  }

}
