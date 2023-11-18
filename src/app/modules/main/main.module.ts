import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelperService} from "../../services/helper.service";
import {Router} from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MainModule {

  title: string = ''; //The name of the component being used. Such as 'Character At'
  appType:string = '';//The appType can equal Array, String, or RegExpr. Get from the Application URL.

  _service:any;

  componentType:string =''; //The componentType 'Array', 'Regular Expression', 'String', or 'Content'. Get from ContextComponentType enum.
  context = new Map();

  /**********************\
  * MESSAGING            *
  \**********************/

  displayMessage:string ='';

  showSuccess:boolean = false;
  showMessage: boolean = false;

  constructor() {
  }

  setEnvironment(router: Router){

    this.title   = HelperService.convertUrlToTitle(router.url);
    // console.log(" **** InitializeComponent - WEBPAGE NAME *** '" + this.title +"' ");

    this.appType = HelperService.convertUrlToType(router.url);
    // console.log(" **** InitializeComponent - Application Type *** '" + this.appType +"' ");
  }

  removeAllVarVal(){

    if( typeof this.context.get(this.title) != "undefined"){
      if( typeof  this.context.get(this.title).variableValues == "undefined"){
        this.context.get(this.title).variableValues = [];
      }else{
        while(this.context.get(this.title).variableValues.length > 0) {
          this.context.get(this.title).variableValues.pop();
        }
      }
    }

  }


  get service(): any {return this._service;}
  set service(value: any) {this._service = value;}
}
