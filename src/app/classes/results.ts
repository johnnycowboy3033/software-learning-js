import {HelperService} from "../services/helper.service";
import {Context} from "./context";
import {ArrayTypeResults} from "../enumerates/array/array-type-results";

export class Results {

  private _showPage: boolean = false;
  private _typeResult: string  | undefined;

  private _context: any| undefined;

  private _assignStatement:string[] = [];
  private _code:string = "";



  /*
  ShowPage - Show the whole Show Component.

  TypeResults - This the Radio Button the user selected. For Example the typeResults for Array screens can be set to
  ArrayTypeResults.ResultArray.

 */

  constructor(data:{
    ShowPage: boolean,
    TypeResults?:string,
  }) {
    this._showPage = data.ShowPage;

    this._typeResult = ( HelperService.checkNotUndef( data.TypeResults) ) ? data.TypeResults : "";
  }

  get showPage(): boolean {return this._showPage;}
  set showPage(value: boolean) {this._showPage = value;}

  get typeResult(): string | undefined {return this._typeResult;}
  set typeResult(value: string | undefined) {this._typeResult = value;}

  get context(): any | undefined {return this._context;}
  set context(value: any | undefined) {this._context = value;}

  get assignStatement(): string[] {return this._assignStatement;}
  set assignStatement(value: string[]) {this._assignStatement = value;}

  get code(): string {return this._code;}
  set code(value: string) {this._code = value;}

  run(context:any){

    // console.log(" < ***** Run Results ***** > ");

    this._context  = context;

/*    if( typeof context.begin != "undefined"){
      console.log( "Declaration Values: " + context.begin.defaultNames)
    }
    console.log( "Code: " + context.usesCode);

    if( Array.isArray(context.variableValues)){
      console.log("Variable Values: ");
      for( const[index,element] of context.variableValues.entries()){
        console.log("[" + index + "] = " + element);
      }

    }*/

    if (this._typeResult === ArrayTypeResults.ResultArray) {
      // console.log('Case : ' + this._typeResult);
      this.resultArray();
    } else {
      console.log('ERROR: run-function-array-.component - submitForm - Did not find-array assign the Type Result in the Component Context in the Array Module.')
    }
  }

  createAssignStatement(){

    let buildAssign = "";
    for( const[index,element]  of this._context.begin.defaultNames.entries()){
      if(Array.isArray(this._context.variableValues[index])){
        let temp = this._context.variableValues[index].join();
        temp = temp.replaceAll(',','","');

        this._assignStatement[index] = 'let '+element+' = ["'+ temp  +'"];';

        buildAssign = buildAssign + this._assignStatement[index];
      }

    }

    return buildAssign;
  }

  resultArray(){
    //Run the code
    let results = eval(this.createAssignStatement() + " " + this._code );

    for( const[index,element] of results.entries()){
      console.log( "["+index+"] = " + element);
    }
  }

}
