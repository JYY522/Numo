import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public type: string;
  public participants: any;
  public minprice: any;
  public maxprice: any;
  ac:any;
 
  constructor(private _api:ApiService) { 
    
  }
  url = 'http://www.boredapi.com/api/activity/';

  
  ngOnInit() {
    this._api.getActivity().subscribe(data => {
      this.ac = data;
     
    });
  }

  refresh(): void {
    window.location.reload();
  }

    save(ac: any) {
      window.alert('Your product has been added to the collection!');
      this._api.addActivity(ac);
    }
    search() {
      this._api.searchActivity(this.participants,this.type,this.minprice,this.maxprice).subscribe(data => {
      this.ac = data;
       
      });
      
    }
    
}


