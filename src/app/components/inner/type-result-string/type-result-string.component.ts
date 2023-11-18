import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {StringTypeResults} from "../../../enumerates/string/string-type-results";

@Component({
  selector: 'app-type-result-string',
  templateUrl: './type-result-string.component.html',
  styleUrls: ['./type-result-string.component.css']
})
export class TypeResultStringComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor( private fb: FormBuilder) {

    //On each Radio Button I use the resultTypeMap Key as the value.
    this.resultTypeMap.set('RA', StringTypeResults.ResultArray);
    this.resultTypeMap.set('RB', StringTypeResults.ResultBoolean);
    this.resultTypeMap.set('RN', StringTypeResults.ResultNumber);
    this.resultTypeMap.set('RS', StringTypeResults.ResultString );

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
    return StringTypeResults;
  }

}
