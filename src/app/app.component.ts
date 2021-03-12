import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ram Krishna';

  constructor(private router:Router){
    // console.log("gdhfdsghsfdsfshgd");
  	//this.router.navigate(["/home"])
  }
}
