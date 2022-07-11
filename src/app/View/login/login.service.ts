import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {RequestLogingModel,ResponseLogingModel} from "../login/login.model"
import {HttpService} from '../../share/httpService/http.service'

@Injectable({
  providedIn: 'root',
})
export class AuthenService{
    constructor(private http:HttpService){}

    RandomUser() : Observable<any>{
        return this.http.get('https://randomuser.me/api/?results=2');
    }

    GetDataTemp() : Observable<any>{
        return this.http.get('api/WeatherForecast/GetTest');
    }

    Login(payload:RequestLogingModel) : Observable<any>{
        return this.http.post('api/Authentication/AuthenticationHandel',payload);
    }
}
