import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { callbackify } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pickup-callbackify(){
    
  }

}
