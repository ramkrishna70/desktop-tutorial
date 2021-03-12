import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


	public date_time:string;

  constructor() { }

  ngOnInit(): void {

  	this.date_time = new Date().toLocaleDateString();
 
  }
  
  open_url(url:string) {
  	window.open(url);
  }

}
