import {HelperService} from "../services/helper.service";

import {Code} from "./nesting/code/code";
import {MethodTable} from "./nesting/method-table/method-table";
import {ArgumentTable} from "./nesting/argument-table/argument-table";
import {Begin} from "./nesting/begin/begin";

export class Context {

  private _componentType: string = "";
  private _begin: Begin | undefined ;
  private _codeDescription: string  | undefined;
  private _code: Code | undefined ;
  private _tablesCode: string  | undefined;
  private _methodTable: MethodTable | undefined;
  private _argumentTable : ArgumentTable | undefined;
  private _variableValues:string[]  = [] ;
  private _usesCode: string = '';
  private _displayResult:string[]  = [] ;

/*
  ComponentType -

  Begin (Array Initialize/Initialize Components and Show Component)
    DefaultNames - (Used to calculate Display Result) This contains an array of assignment name. For example let helloWorld = "Hello World" ;
      or let Peoples = [ 'Cecilie", "Lone", "Emil", "Tobias", "Linus"];
      The Declaration Names would equal declarationNames = [ 'helloWorld', 'Peoples' ] ; This must match with Variable Values.

  CodeDescription (Hint Component) - This contains information about Method, For example for the Concatenate Method the Code Description is
    'Join several arrays into one.'

  Code (Hint Component)
    Call -
    Type -
    Method -
    MethodParentheses -
    Logic -
    TypeResults -

  TablesCode - (Hint Component)
  MethodTable (Hint Component)
    Parameter -
    Description -

  ArgumentTable (Hint Component)
    Argument -
    Description -

 (Show Component)
  Variable Values -  (Used to calculate Display Result)  An example would be as follows :
      variableValues = [  "Hello World", [ 'Cecilie", "Lone", "Emil", "Tobias", "Linus"], ]; The first element would be string while the
      second element would be an array.

  Uses Code - This contains the code the users put in the editor area text box.

  Display Result - Storages what is shown on the Show Component.

*/


  constructor(data:{
    ComponentType:string,
    Begin?: {
      DefaultNames?:string[]
    },
    CodeDescription?:string,
    Code?:{
      Call?:string,
      Type?:string,
      Method?:string,
      MethodParentheses?:boolean,
      Logic?:string,
      TypeResults?:string
    },
    TablesCode?:string,
    MethodTable?:{
      Parameter?:string[],
      Description?:string[]
    },
    ArgumentTable?:{
      Argument?:string[],
      Description?:string[]
    }

  }) {

    this._componentType = data.ComponentType;

    if( typeof data.Begin != 'undefined' && typeof data.Begin.DefaultNames != 'undefined'){
      if(data.Begin.DefaultNames.length > 0){
        let tempDefaultName:string[] = [];
        HelperService.cloneSingle(data.Begin.DefaultNames,tempDefaultName);
        this._begin = new Begin( tempDefaultName );
      }

    }



    this._codeDescription = ( HelperService.checkNotUndef(data.CodeDescription) )? data.CodeDescription : "";

    this._code = new Code(
      ( HelperService.checkNotUndefined(data.Code,data.Code?.Call) )? data.Code?.Call : "" ,
      ( HelperService.checkNotUndefined(data.Code,data.Code?.Type) )? data.Code?.Type : "" ,
      ( HelperService.checkNotUndefined(data.Code,data.Code?.Method) )? data.Code?.Method : "" ,
      ( HelperService.checkNotUndefined(data.Code,data.Code?.MethodParentheses) )? data.Code?.MethodParentheses : true ,
      ( HelperService.checkNotUndefined(data.Code,data.Code?.Logic) )? data.Code?.Logic : "" ,
      ( HelperService.checkNotUndefined(data.Code,data.Code?.TypeResults) )? data.Code?.TypeResults : ""
    );

    this._tablesCode = ( HelperService.checkNotUndef(data.TablesCode) )? data.TablesCode : "";

    this._methodTable = new MethodTable(
      ( HelperService.checkNotUndefined(data.MethodTable,data.MethodTable?.Parameter) )? data.MethodTable?.Parameter: [] ,
      ( HelperService.checkNotUndefined(data.MethodTable,data.MethodTable?.Description) )? data.MethodTable?.Description: []
    );

    this._argumentTable = new ArgumentTable(
      ( HelperService.checkNotUndefined(data.ArgumentTable,data.ArgumentTable?.Argument) )? data.ArgumentTable?.Argument: [] ,
      ( HelperService.checkNotUndefined(data.ArgumentTable,data.ArgumentTable?.Description) )? data.ArgumentTable?.Description: []
    );

  }

  get componentType(): string {return this._componentType;}
  set componentType(value: string) {this._componentType = value;}

  get begin(): Begin | undefined {return this._begin;}
  set begin(value: Begin | undefined) {this._begin = value;}

  get codeDescription(): string | undefined {return this._codeDescription;}
  set codeDescription(value: string | undefined) {this._codeDescription = value;}

  get code(): Code | undefined {return this._code;}
  set code(value: Code | undefined) {this._code = value;}


  get tablesCode(): string | undefined {return this._tablesCode;}
  set tablesCode(value: string | undefined) {this._tablesCode = value;}

  get methodTable(): MethodTable | undefined {return this._methodTable;}
  set methodTable(value: MethodTable | undefined) {this._methodTable = value;}

  get argumentTable(): ArgumentTable | undefined {return this._argumentTable;}
  set argumentTable(value: ArgumentTable | undefined) {this._argumentTable = value;}

  get variableValues(): string[] {return this._variableValues;}
  set variableValues(value: string[]) {this._variableValues = value;}

  get usesCode(): string {return this._usesCode;}
  set usesCode(value: string) {this._usesCode = value;}

  get displayResult(): string[] {return this._displayResult;}
  set displayResult(value: string[]) {this._displayResult = value;}


}
