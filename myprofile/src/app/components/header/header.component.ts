import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public active_url:string;

  constructor(private route: ActivatedRoute, 
    private router: Router,) { }

  ngOnInit(): void { 
  }

  process_route(url:string) { 
    this.active_url = url; 
  }


}
