import { Component } from '@angular/core';
import {RegExprService} from "../../../services/reg-expr/reg-expr.service";
import {StringService} from "../../../services/string/string.service";
import {HelperService} from "../../../services/helper.service";
import {Router} from "@angular/router";
import {MainModule} from "../../../modules/main/main.module";
import {Statement} from "../../../classes/nesting/statement/statement";

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.css']
})
export class InitializeComponent extends  MainModule{

  contextMap:any;
  assign: string[] = [];//List of the strings. For example
  assignStatement: any[] = [];

  constructor(private router: Router,regExprService:RegExprService,stringService: StringService) {
      super();

    this.setEnvironment(router);

    if(this.appType == 'String'){this.service = stringService;}
    if(this.appType == 'RegExpr'){this.service = regExprService;}

    if( typeof this._service != "undefined"){
      this.context = this._service.receiveContext();
    }

    if(typeof this.service != "undefined") {
      if (typeof this.service.context != "undefined") {
        this.contextMap = this.service.context.get(this.title);

        this.assign = this.contextMap.begin.defaultNames;

        this.assignStatement = [];

        this.assign.forEach((value, index, array) => {

          let state = new Statement(value, this.service.arraysMap.get(value))

          this.assignStatement.push(state);

        });
      }
    }

    this.save();
  }

  save(){

    this.removeAllVarVal();

    for (const [index, element] of this.assign.entries()){
      this.context.get(this.title).variableValues.push( " '" + this.service.arraysMap.get(element) + "' ");
    }

    if( typeof this.service != "undefined"){
      this.service.sendContext(this.context);
    }

  }

}
