import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items;
  constructor(private _api:ApiService) { }

 
  ngOnInit() {
    this.items = this._api.getItems();
  }
   remove():void {
    this._api.remove();
    window.location.reload();
  }
  

  


}
