import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Results} from "../../../classes/results";
import {MainModule} from "../../../modules/main/main.module";

import {ArrayService} from "../../../services/array/array.service";
import {RegExprService} from "../../../services/reg-expr/reg-expr.service";
import {StringService} from "../../../services/string/string.service";
import {HelperService} from "../../../services/helper.service";

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent extends  MainModule implements OnInit {

  //This will show which buttons are displayed.
  showArray:boolean = false;
  showString:boolean = false;
  showRegExpr:boolean = false;

  code:string|null = '';

  results:Results =new Results({ShowPage:true});
  @Output()  _sendResult: EventEmitter<Results> = new EventEmitter<Results>();


  ngOnInit(): void {
  }

  constructor(arrayService: ArrayService,
              regExprService:RegExprService,
              stringService:StringService,
              private router: Router,
              private fb: FormBuilder){
    super();

    this.setEnvironment(router);

    if(this.appType == 'Array'){
      this.showArray = true;
      this.service = arrayService;
    }
    if(this.appType == 'String'){
      this.showString= true;
      this.service = stringService;
    }
    if(this.appType == 'RegExpr'){
      this.showRegExpr = true;
      this.service = regExprService;
    }

  }

  codeForm = this.fb.group({
    code: [],
  });

  setTypeResults($event:string){
    //console.log("Event Type Result Radio Button Trigger: " + $event);

    this.results.typeResult  = $event;
  }


  submitForm(){

    this.context = this._service.receiveContext();

    let body = this.codeForm.getRawValue();
    this.code = body.code;

/*
    console.log( 'Code Editor = '  + this.code);
    console.log( 'Results Type = '  + this.typeResults);
*/
    this.showSuccess = true;
    this.displayMessage = "";

    //The user has not select Type Result Radio Button
    if(this.results.typeResult == ""){
      this.displayMessage = this.displayMessage + ' Please select type result radio button. ';
      this.showSuccess = false;
    }

    //The user not put text in the Code Area Text
    if(this.code == "" || this.code == null ){
      this.displayMessage  = this.displayMessage  + 'Editor has no text.';
      this.showSuccess = false;
    }

    this._sendResult.emit( this.results );

    if(this.showSuccess){
      this.displayMessage  = this.displayMessage + "Great Successful!";
    }

    this.context.get(this.title).usesCode = this.code;
    this.service.sendContext(this.context);

    // @ts-ignore
    this.results.code = this.code;

    this.results.run(this.context.get(this.title));

    this.showMessage = true;

  }



}
