import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: any;
  @Input() selectedOption: any;
  @Output() selectedOptionEmit = new EventEmitter<object>();

  constructor(private _cookieService: CookieService) { }

  onChane(option: any): void {
    this.selectedOption = option;
    this.selectedOptionEmit.emit(option);

    //save selectedOption into cookie
    this._cookieService.set("selectedOption", this.selectedOption.id); 
  }

}
