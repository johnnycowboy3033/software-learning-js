import {HelperService} from "../../../services/helper.service";

export class ArgumentTable {

  private _argument?:string[]| undefined = [];
  private _description?:string[]| undefined = [];

  constructor(argument?:string[]| undefined,
              description?:string[]| undefined){
    this._argument = ( HelperService.checkNotUndef(argument) )? argument : [];
    this._description = ( HelperService.checkNotUndef(description) )? description : [];
  }

  get argument(): string[] | undefined {return this._argument;}
  set argument(value: string[] | undefined) {this._argument = value;}

  get description(): string[] | undefined {return this._description;}
  set description(value: string[] | undefined) {this._description = value;}


}
