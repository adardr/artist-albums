import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{
  
  @Input() options: any;
  @Input() selectedOption: any;

  constructor(private _cookieService: CookieService){}

  // ngOnInit() {
  //   this._cookieService.put("test", "test");
  //   console.log("Set Test Cookie as Test");
  // }

  // getCookie(key: string) {
  //   return this._cookieService.get(key);
  // }

  onChane(option: any): void{
    this.selectedOption = option;
    console.log(option);
    // this._cookieService.set("this.selectedOption", this.selectedOption); //save option cookie
    // console.log(this.selectedOption);
    
  }

}
