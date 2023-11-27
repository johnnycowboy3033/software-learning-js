import {Context} from "../context";
import {HelperService} from "../../services/helper.service";


export class ContextArray extends Context {

  /*
    ShouldCompare ( Show Components) - When the user runs the code this variable is set true the Final Arrays
    are compare and different element are colored red on the Show States Components Screen.
*/

  private _shouldCompare: undefined | boolean = false;

  constructor(data:{
    ComponentType:string,
    ShouldCompare?: boolean,
    Begin?: {
      DefaultNames?:string[]
    },
    CodeDescription?:string,
    Code?:{
      Assignment?:string,
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
    super(data);

    this._shouldCompare = ( HelperService.checkNotUndef(data.ShouldCompare) )? data.ShouldCompare : false;

  }

  get shouldCompare(): boolean | undefined {return this._shouldCompare;}
  set shouldCompare(value: boolean | undefined) {this._shouldCompare = value;}

}
