import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'
import { NgForOf } from '@angular/common';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user='';
  pwd='';
  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }
  
  enter(){
    if(this.user == (this.users$).username && this.pwd == (this.users$).username ){
        console.log("Success");
    }
    else{
        alert("Invalid Credentials");
        console.log("Invalid Credentials");
        this.user='';
        this.pwd='';
    }
  }

}
