import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {ArrayTypeResults} from "../../../enumerates/array/array-type-results";

@Component({
  selector: 'app-type-result-array',
  templateUrl: './type-result-array.component.html',
  styleUrls: ['./type-result-array.component.css']
})
export class TypeResultArrayComponent  implements OnInit {


  ngOnInit(): void {
  }

  constructor( private fb: FormBuilder) {

    //On each Radio Button I use the resultTypeMap Key as the value.
    this.resultTypeMap.set('RA', ArrayTypeResults.ResultArray);
    this.resultTypeMap.set('RB', ArrayTypeResults.ResultBoolean);
    this.resultTypeMap.set('RN', ArrayTypeResults.ResultNumber);
    this.resultTypeMap.set('RS', ArrayTypeResults.ResultString);
    this.resultTypeMap.set('CA', ArrayTypeResults.ChangeArray);
    this.resultTypeMap.set('EA', ArrayTypeResults.EmptyArray);

  }

  radioGroup = this.fb.group({
    results:[''],
  });

  resultTypeMap = new Map();

   _typeResult:string = '';
  @Output()  _sendTypeResult: EventEmitter<string> = new EventEmitter<string>();

  changeTypeResult(e:any) {
    this._typeResult = this.resultTypeMap.get(e.target.value)
    // console.log("THE " + this._typeResult + " RADIO BUTTON WAS CHANGED");

    this._sendTypeResult.emit( this._typeResult );
  }

  getTypeResult(){
    return ArrayTypeResults;
  }


}
