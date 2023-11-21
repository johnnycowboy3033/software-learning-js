import {HelperService} from "../services/helper.service";

import {ArrayTypeResults} from "../enumerates/array/array-type-results";

export class Results {

  private _showPage: boolean = false;
  private _typeResult: string  | undefined;

  private _context: any| undefined;

  private _assignStatement:string[] = [];
  private _code:string = "";

  private _resultArray:string[] = [];
  private _resultString:string= '';
  private _resultNumber:string= '';
  private _resultBoolean:string= '';

  //Show parts of the webpage
  private _showArrayResults:boolean = false;
  private _showStringResults:boolean = false;
  private _showNumberResults:boolean = false;
  private _showBooleanResults:boolean = false;


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

  get resultArray(): string[] {return this._resultArray;}
  set resultArray(value: string[]) {this._resultArray = value;}

  get resultString(): string {return this._resultString;}
  set resultString(value: string) {this._resultString = value;}

  get resultNumber(): string {return this._resultNumber;}
  set resultNumber(value: string) {this._resultNumber = value;}

  get resultBoolean(): string {return this._resultBoolean;}
  set resultBoolean(value: string) {this._resultBoolean = value;}

//Show
  get showArrayResults(): boolean {return this._showArrayResults;}
  set showArrayResults(value: boolean) {this._showArrayResults = value;}

  get showStringResults(): boolean {return this._showStringResults;}
  set showStringResults(value: boolean) {this._showStringResults = value;}

  get showNumberResults(): boolean {return this._showNumberResults;}
  set showNumberResults(value: boolean) {this._showNumberResults = value;}

  get showBooleanResults(): boolean {return this._showBooleanResults;}
  set showBooleanResults(value: boolean) {this._showBooleanResults = value;}

  toString(){
    let returnTemp = "";

    returnTemp = returnTemp + "\n showPage: " + this.showPage;
    returnTemp = returnTemp + "\n typeResult: " + this.typeResult;
    returnTemp = returnTemp + "\n assignStatement: ";

    for( const[index,element] of this.assignStatement.entries()){
      returnTemp = returnTemp + "["+ index +"] = " + element;
    }

    return returnTemp;
  }

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
    // console.log('Case : ' + this._typeResult);

    this.showPage = true;

    this._showArrayResults = false;
    this._showStringResults = false;
    this._showNumberResults = false;
    this._showBooleanResults = false;

    if (this._typeResult === ArrayTypeResults.ResultArray) {
      this.findResultArray();
    } else if(this._typeResult === ArrayTypeResults.ChangeArray){
      this.findChangesArray();
    }else if(this._typeResult === ArrayTypeResults.ResultString){
      this.findResultString();
    }else if(this._typeResult === ArrayTypeResults.ResultNumber){
      this.findResultNumber();
    }else if(this._typeResult === ArrayTypeResults.ResultBoolean){
     this.findResultBoolean();
    }else {
      console.log('ERROR: run-function-array-.component - submitForm - Did not find-array assign the Type Result in the Component Context in the Array Module.')
    }
  }

  createAssignStatement(){

    let buildAssign = "";
    for( const[index,element]  of this._context.begin.defaultNames.entries()){

      let temp = "";
/*
      Create the assignment statement which can be an array or string.
      For example might be for array to create
          let peoples = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
       or for string
          let helloWorld = "Hello World" ;

 */
      if(Array.isArray(this._context.variableValues[index])){
        temp= this._context.variableValues[index].join();
        temp = temp.replaceAll(',','","');
        this._assignStatement[index] = 'let '+element+' = ["'+ temp  +'"];';
      }else{
        temp= this._context.variableValues[index]
        this._assignStatement[index] = 'let '+element+' = '+ temp  +';';
      }

      buildAssign = buildAssign + this._assignStatement[index];

    }

    return buildAssign;
  }

  findResultArray(){
    //Run the code
   this._resultArray = eval(this.createAssignStatement() + " " + this._code );

/*
    for( const[index,element] of this._resultArray.entries()){
      console.log( "["+index+"] = " + element);
    }
 */

    this._showArrayResults = true;
  }

  findChangesArray(){

    let buildAssign = this.createAssignStatement();

    /*
     Example:
        Remove the let from the  let peoples = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]; so
        becomes peoples = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
     */
    buildAssign = buildAssign.replace("let","");

    //Example: Variable used for the changed array.
    let tempVariable;

    //Example: Change the code to replace people to tempVariable
    buildAssign = buildAssign.replace(this._context.begin.defaultNames[0],"tempVariable" );
    let codeWithTempVariable = this._code.replace(this._context.begin.defaultNames[0],"tempVariable" );

    eval( buildAssign + " " + codeWithTempVariable );

    console.log("Changes Array: "+ tempVariable);

    if(typeof tempVariable != 'undefined'){
      this._resultArray = tempVariable;
      this._showArrayResults = true;
    }

  }

  findResultString(){

    //Run the code
    this._resultString = eval(this.createAssignStatement() + " " + this._code );

    /*
      console.log( "String Results = " + this._resultString );
     */

    this._showStringResults = true;

  }

  findResultNumber(){

    //Run the code
    this._resultNumber = eval(this.createAssignStatement() + " " + this._code );

    /*
      console.log( "Number Results = " + this._resultNumber );
     */

    this._showNumberResults = true;

  }
  findResultBoolean(){

    //Run the code
    let tempResultBoolean = eval(this.createAssignStatement() + " " + this._code );

    if(typeof tempResultBoolean == "boolean"){
        if(tempResultBoolean){
          this._resultBoolean = 'true';
        }else{
          this._resultBoolean = 'false';
        }
    }


    /*
      console.log( "Boolean Results = " + this._resultBoolean  );
     */

    this._showBooleanResults = true;

  }


}
