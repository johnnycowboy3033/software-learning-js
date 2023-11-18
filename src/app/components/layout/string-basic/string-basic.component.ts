import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {MainModule} from "../../../modules/main/main.module";

import {StringService} from "../../../services/string/string.service";
import {HelperService} from "../../../services/helper.service";



@Component({
  selector: 'app-string-basic',
  templateUrl: './string-basic.component.html',
  styleUrls: ['./string-basic.component.css']
})
export class StringBasicComponent extends MainModule implements  OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, stringService : StringService){
    super();
    this.setEnvironment(router);

    this._service = stringService;

    stringService.sendActiveComponent(this.title);
    this.context = this._service.receiveContext();

    if( typeof this.context.get(this.title) != 'undefined') {
      this.componentType = this.context.get(this.title).componentType;
    }

  };

}
