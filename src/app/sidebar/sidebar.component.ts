import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  sideExpanded= false;
  ngOnInit() {
  }
  mobnav(){
    this.sideExpanded = !this.sideExpanded;
    console.log(this.sideExpanded);
  }
}
