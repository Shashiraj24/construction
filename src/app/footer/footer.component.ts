import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  image:string="";

  //for 2nd column
 public test="History";
 public test1:string="Team & Awards";
 public test2:string="Community";
 public test3:string="News & Events";
 public test4:string="FAQ";
 public test5:string="Contact Us";
 public test6:string="Services";
 public test7:string="Delivery Methods";
 public test8:string="Saftey";
 public test9:string="Sustainability";
 public test10:string="Portfolio";
 public test11:string="Shop";

//for 3rd column
public test12:string="Address: ";
public test13:string="Phone:" ;
public test14:string="Email:";
public test15:any="1379 Shoreline Parkway, Mountain View, CA 94043, United States";
public test16:any= "+1 718-999-3939";
public test17:any= "contact@construction.com";


  constructor() { 
  
  }

  ngOnInit(): void {

   
      
    }
  

}
