import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {RegExprTypeResults} from "../../../enumerates/reg-expr/reg-expr-type-results";

@Component({
  selector: 'app-type-result-reg-expr',
  templateUrl: './type-result-reg-expr.component.html',
  styleUrls: ['./type-result-reg-expr.component.css']
})
export class TypeResultRegExprComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor( private fb: FormBuilder) {

    //On each Radio Button I use the resultTypeMap Key as the value.
    this.resultTypeMap.set('EM', RegExprTypeResults.ExecMethod);
    this.resultTypeMap.set('RM', RegExprTypeResults.ReplaceMethod);
    this.resultTypeMap.set('RB', RegExprTypeResults.ReturnBoolean);
    this.resultTypeMap.set('MM', RegExprTypeResults.MatchMethod);
    this.resultTypeMap.set('MA', RegExprTypeResults.MatchAllMethod);
    this.resultTypeMap.set('SM', RegExprTypeResults.SearchMethod);

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
    return RegExprTypeResults;
  }

}
