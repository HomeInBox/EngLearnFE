import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import {AuthenService} from './login.service'
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  constructor(private fb:FormBuilder,
              private authenService:AuthenService,
              private messageService:MessageService
    ) { }

  ngOnInit(): void {
    this.formLogin = this.GetForm();
  }
  GetForm():FormGroup {
    return this.fb.group({
      UserName:[''],
      Password:['']
    });
  }

  OnLogin(){
    let Payload = this.formLogin.getRawValue();
    this.authenService.Login(Payload).subscribe(res => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
      localStorage.setItem("Authorization",JSON.stringify(res.data));
    });
  }

  getTest(){
    this.authenService.GetDataTemp().subscribe(res => {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
      console.log(res);
    });
  }
}
