import {Context} from "../context";
import {ArrayService} from "../../services/array/array.service";
import {HelperService} from "../../services/helper.service";
import {Begin} from "../nesting/begin/begin";

export class ContextArray extends Context {

  /*
    ShouldCompare ( Show Components) - When the user runs the code this variable is set true the Final Arrays
    are compare and different element are colored red on the Show States Components Screen.

    TableNameType  ( Show Components) -  The names set to the arrays/string which is displayed.
    You determine how generate the array (table) names. For example if you have two arrays named Fruits and Peoples.
    If you use the CombinationNames.ArrayTableNameType enum the array name would be Fruits/Peoples. If you use the
    CombinationNames.NotDefault enum the array name would be Empty.

*/

  private _shouldCompare: undefined | boolean = false;
  private _tableNameType: string | undefined ;

  constructor(data:{
    ComponentType:string,
    ShouldCompare?: boolean,
    TableNameType?:string,
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
    super(data);

    this._shouldCompare = ( HelperService.checkNotUndef(data.ShouldCompare) )? data.ShouldCompare : false;
    this._tableNameType = ( HelperService.checkNotUndef(data.TableNameType) )? data.TableNameType : "";

  }

  get shouldCompare(): boolean | undefined {return this._shouldCompare;}
  set shouldCompare(value: boolean | undefined) {this._shouldCompare = value;}

  get tableNameType(): string | undefined {return this._tableNameType;}
  set tableNameType(value: string | undefined) {this._tableNameType = value;}

}
