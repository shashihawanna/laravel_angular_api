import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl =environment.baseUrl;
  constructor(private http: HttpClient) { }

  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  resetPassword(data:any){
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }

  sendResetPasswordLink(data:any){
    return this.http.post(`${this.baseUrl}/sendResetPasswordLink`, data);
  }
}
