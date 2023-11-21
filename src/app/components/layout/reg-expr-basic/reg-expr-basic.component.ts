import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {RegExprService} from "../../../services/reg-expr/reg-expr.service";
import {HelperService} from "../../../services/helper.service";
import {MainModule} from "../../../modules/main/main.module";
import {Results} from "../../../classes/results";

@Component({
  selector: 'app-reg-expr-basic',
  templateUrl: './reg-expr-basic.component.html',
  styleUrls: ['./reg-expr-basic.component.css']
})
export class RegExprBasicComponent extends MainModule implements  OnInit {

  ngOnInit(): void {
  }

  results:Results =new Results({ShowPage:false});

  constructor(router: Router, regExprService : RegExprService){
    super();
    this.setEnvironment(router);

    this._service = regExprService;

    this.context = this._service.receiveContext();
    regExprService.sendActiveComponent(this.title);

    if( typeof this.context.get(this.title) != 'undefined') {
      this.componentType = this.context.get(this.title).componentType;
    }

  };

  setResults($event:Results){

    this.results = $event;

/*
    console.log("Should view Show Component ? " +   this.results.showPage);
    console.log("Type Result: " +   this.results.typeResult);
*/


  }

}
