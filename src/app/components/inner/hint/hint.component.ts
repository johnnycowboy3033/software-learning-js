import {Component, OnInit} from '@angular/core';

import {MainModule} from "../../../modules/main/main.module";
import {HelperService} from "../../../services/helper.service";
import {ContextComponentType} from "../../../enumerates/context/context-component-type";
import {Router} from "@angular/router";
import {ArrayVariables} from "../../../enumerates/array/array-variables";
import {ArrayService} from "../../../services/array/array.service";
import {RegExprService} from "../../../services/reg-expr/reg-expr.service";
import {StringService} from "../../../services/string/string.service";
import {RegExprVariables} from "../../../enumerates/reg-expr/reg-expr-variables";
import {StringVariables} from "../../../enumerates/string/string-variables";


@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent  extends MainModule implements OnInit  {

  showHint:boolean = false;

  showFunc:boolean = false;
  showTable:boolean = false;
  showArgument:boolean = false;

  table:string[][] =[];
  argument:string[][]=[];

  codeDescription:string = '';
  call:string = '';
  type:string = '';
  method:string = '';
  logic:string ='';

  displayCall:string = '';
  displayTableCode:string ='';
  displayMethod:string='';
  displayLogic:string='';

  contextMap:any;

  ngOnInit(): void {

  }

  constructor(router: Router, arrayService: ArrayService, regExprService:RegExprService, stringService: StringService) {
    super();

    this.setEnvironment(router);

    if(this.appType == 'Array'){this.service = arrayService;}
    if(this.appType == 'String'){this.service = stringService;}
    if(this.appType == 'RegExpr'){this.service = regExprService;}


    if( typeof this.service != 'undefined'){
      this.context = this._service.receiveContext();
      this.contextMap = this.context.get(this.title);
    }

  }

  /*
  Description:
  In the application the use can change the arrays. For example if the use want to use fruits array instead of the peoples array.
  I have ArrayVariables.Object = array1 and ArrayVariables.ParameterFirst = array2 as placeholder in the following :
  data:{Code:{Call:"ArrayVariables.Object + '.concat( '+ ArrayVariables.ParameterFirst + ' );'" }}}
  This method get replace the placeholder with the array names. For example array1 becomes fruits.
  Parameters:
    checkValue - is the string that contains the placeholder

  */
  replaceSymbols(checkValue:string):string{

    // console.log("checkValue: " + checkValue );

    let result = checkValue;
    let symbols: string[] = [];

    if ( this.contextMap.componentType == ContextComponentType.Array){
      symbols = HelperService.enumElements(ArrayVariables,false);
    }

    if ( this.contextMap.componentType == ContextComponentType.RegExr){
      symbols = HelperService.enumElements(RegExprVariables,false);
    }

    if ( this.contextMap.componentType == ContextComponentType.String){
      symbols = HelperService.enumElements(StringVariables,false);
    }


/*    console.log('symbols.length: ' + symbols.length);
    for( let i = 0; i < symbols.length; i++){
      console.log( " [" + i + "] " + symbols[i] );
    }*/

    // console.log( " Title: "+ this.title);

    this.contextMap.begin.defaultNames.forEach((value:string,index:number,array:any)=>{
      if(checkValue.includes(symbols[index])){
        result =  result.replace(symbols[index],value);
      }
    });

    return result;

  }

  hint(){
    //Description Block (showHint)
    if( typeof this.contextMap.codeDescription!= 'undefined'){
      this.codeDescription = this.contextMap.codeDescription;
    }

    //Function Block (showFunc)
    this.type = this.contextMap.code.type;
    if(this.contextMap.code.methodParentheses){
      this.displayMethod = '(' + this.replaceSymbols(this.contextMap.code.method) + ')';
    }else{
      this.displayMethod = this.replaceSymbols(this.contextMap.code.method) ;
    }
    this.displayLogic = this.contextMap.code.logic;

    //Call Block (showHint)
    this.displayCall = this.replaceSymbols(this.contextMap.code.call);

    //Table with Description of the parameters of code
    this.displayTableCode = this.contextMap.tablesCode

    if( this.contextMap.methodTable.parameter.length > 0){
      for(let index = 0 ; index < this.contextMap.methodTable.parameter.length;index++){
        let tempTable = [this.contextMap.methodTable.parameter[index], this.contextMap.methodTable.description[index]];
        this.table.push(tempTable);
      }
    }

    //Table with Description of the arguments of code
    if( this.contextMap.argumentTable.argument.length > 0){
      for(let index = 0 ; index < this.contextMap.argumentTable.argument.length;index++){
        let tempArgument = [this.contextMap.argumentTable.argument[index], this.contextMap.argumentTable.description[index]];
        this.argument.push(tempArgument);
      }
    }


   /**********************************\
   * Shows and hides the hint areas  *
   \**********************************/
    this.showHint= !this.showHint;

   if(this.type.length > 0){this.showFunc = !this.showFunc;}
    if( this.contextMap._methodTable._parameter.length > 0){this.showTable = !this.showTable;}
    if( this.contextMap._argumentTable._argument.length  > 0){this.showArgument = !this.showArgument;}

  }

}
