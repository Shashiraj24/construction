import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public image:any;

  public data:any= "+1 718-999-3939";
  public data1:string= " contact@construction.com";
    public data2:any= "Mon-Fri: 7:00 - 17:00"

   
 
 
  constructor() { }
   

  ngOnInit(): void {
 
  
  }

}
