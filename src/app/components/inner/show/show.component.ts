import { Component, Input } from '@angular/core';
import {Results} from "../../../classes/results";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  @Input() displayResult:Results =new Results({ShowPage:false});

  constructor() {
    // console.log( "Display Results: " + this.displayResult.toString() );
  }

}
