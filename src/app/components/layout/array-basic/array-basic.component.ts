import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import {HelperService} from "../../../services/helper.service";
import {Results} from "../../../classes/results";
import {MainModule} from "../../../modules/main/main.module";
import {ArrayService} from "../../../services/array/array.service";

@Component({
  selector: 'app-array-basic',
  templateUrl: './array-basic.component.html',
  styleUrls: ['./array-basic.component.css']
})
export class ArrayBasicComponent extends MainModule implements OnInit {

  ngOnInit(): void {
  }


  results:Results =new Results({ShowPage:false});

  constructor(private router: Router, arrayService:ArrayService){
    super();
    this.setEnvironment(router);

    this._service = arrayService;

    this.context = this._service.receiveContext();
    arrayService.sendActiveComponent(this.title);

    if( typeof this.context.get(this.title) != 'undefined') {
      this.componentType = this.context.get(this.title).componentType;
    }

  };

  setResults($event:Results){

    this.results = $event;

    this.results.showPage = true;

/*    console.log("Should view Show Component ? " +   this.results.showPage);
    console.log("Type Result: " +   this.results.typeResult);*/


  }



}
