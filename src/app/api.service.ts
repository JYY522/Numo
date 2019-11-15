import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items=[];
  private activityUrl='https://www.boredapi.com/api/activity';
  constructor(private http:HttpClient
    ) { 
      let items = this.getItems();
  }
  public jsonObject:object;

  getActivity(){
    return this.http.get(this.activityUrl)
    console.log(this.activityUrl)
  }

  addActivity(activity){
    this.items = this.getItems();
    console.log(this.items);
    this.items.push(activity)
    console.log(this.items);
    localStorage.setItem('items',JSON.stringify(this.items));
    let aa =JSON.parse(localStorage.getItem('items'));
    console.log(aa);
  }
  
  getItems() {
    let aa =JSON.parse(localStorage.getItem('items'));
    return aa == null ? []: aa;
    console.log(this.items)

  }
   remove() {
    localStorage.removeItem('items');
    return this.items;
  }
  searchActivity(participants:any,type:String,minprice:any,maxprice:any){
    participants = this.whetehrNULL(participants);
    type = this.whetehrNULL(type);
    minprice = this.whetehrNULL(minprice);
    maxprice = this.whetehrNULL(maxprice);
    return this.http.get(this.activityUrl+'?participants='+participants+'&type='+type+'&minprice='+minprice+'&maxprice='+maxprice);
  console.log(this.activityUrl)
    
  }

  whetehrNULL(item:any) {
    if(item === undefined || item === null) {
      item = '';
    }
    return item;
  }
}