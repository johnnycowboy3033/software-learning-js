import { Component } from '@angular/core';

import {MainModule} from "../../modules/main/main.module";
import {Router} from "@angular/router";

import {MainService} from "../../services/main.service";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-reg-expr-class',
  templateUrl: './reg-expr-class.component.html',
  styleUrls: ['./reg-expr-class.component.css']
})
export class RegExprClassComponent  {

  title: string = '';

  constructor(private router: Router){

    this.title   = HelperService.convertUrlToTitle(this.router.url);
    //console.log(" **** RegExprClassComponent - WEBPAGE NAME *** '" + this.title +"' ");

  };

}
