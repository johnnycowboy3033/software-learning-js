import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ContextArray} from "../classes/array/context-array";


@Injectable({
  providedIn: 'root'
})
export class MainService {


  /*
    Map that contains Key is name of the array and Value is an array.
  */
  private _arraysMap = new Map();

  /***************************************************************\
   * Main Services
   *
   * Description:
   * This Object does moving data between the components. The object contains
   * methods working with arrays. You can also work with the webpage.
   ***************************************************************/
  private _activeComponent: string = ''; // Keeps the key of the context manager map.

  private _context = new Map(); //Stores the classes context-array, context-string, context-reg-expr and context

  private dataSourceActiveComponent  =  new BehaviorSubject<string>(this._activeComponent);
  dataActiveComponent : Observable<string> = this.dataSourceActiveComponent.asObservable();

  private dataSourceContext  =  new BehaviorSubject<Map<any, any>>(this._context);
  dataContext : Observable<Map<any, any>> = this.dataSourceContext.asObservable();

  constructor() {
  }

  /***********************\
   *  Getter and Setters   *
   \***********************/

  sendActiveComponent(dataActiveComponent: string) {
    this.dataSourceActiveComponent .next(dataActiveComponent);
  }

  receiveActiveComponent(){
    this.dataSourceActiveComponent .subscribe(response => {
      this._activeComponent = response;
    });
    return this._activeComponent;
  };

  sendContext(dataContext: Map<any,any>) {
    this.dataSourceContext.next(dataContext);
  }

  receiveContext(){
    this.dataSourceContext.subscribe(response => {
      this._context = response;
    });
    return this._context;
  };

  get arraysMap(): Map<any, any> {return this._arraysMap;}
  set arraysMap(value: Map<any, any>) {this._arraysMap = value;}

  get activeComponent(): string {return this._activeComponent;}
  set activeComponent(value: string) {this._activeComponent = value;}

  get context(): Map<any, any> {return this._context;}
  set context(value: Map<any, any>) {this._context = value;}
}
