import {HelperService} from "../../../services/helper.service";

export class MethodTable {


  private _parameter?:string[]| undefined = [];
  private _description?:string[]| undefined = [];

  constructor(parameter?:string[]| undefined,
              description?:string[]| undefined){
    this._parameter = ( HelperService.checkNotUndef(parameter) )? parameter : [];
    this._description = ( HelperService.checkNotUndef(description) )? description : [];
  }

  get parameter(): string[] | undefined {return this._parameter;}
  set parameter(value: string[] | undefined) {this._parameter = value;}

  get description(): string[] | undefined {return this._description;}
  set description(value: string[] | undefined) {this._description = value;}


}
