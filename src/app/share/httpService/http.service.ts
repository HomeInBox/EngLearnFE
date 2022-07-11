import { Injectable } from '@angular/core';

import { HttpHeaders,HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class HttpService{
  private LoginDetail:any;
  constructor(
    private httpClient : HttpClient
  ) {
      this.LoginDetail = localStorage.getItem("Authorization");
    }


  setContentType(
    contentType: string,
    params?: string | URLSearchParams | { [key: string]: any }
  ) {
    contentType || 'application/json';
    const token = JSON.parse(this.LoginDetail)?.token;
    const headers = new HttpHeaders({ 'Content-Type': contentType ,'Authorization':`Bearer ${token}`});
    const options = params
      ? { headers: headers }
      : { headers: headers };
    return options;
  }

  post(url:string,data:any){
    const options = this.setContentType('application/json');
    const response = this.httpClient.post(environment.UrlApiGateway+url,data,options);
    return response;
  }

  get(url:string){
    const options = this.setContentType('application/json');
    const response = this.httpClient.get(environment.UrlApiGateway+url,options);
    return response;
  }

}
