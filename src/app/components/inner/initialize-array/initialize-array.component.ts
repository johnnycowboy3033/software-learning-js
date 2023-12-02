import { Component, OnInit   } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {ArrayService} from "../../../services/array/array.service";
import {HelperService} from "../../../services/helper.service";
import {MainModule} from "../../../modules/main/main.module";
import {Router} from "@angular/router";


@Component({
  selector: 'app-initialize-array',
  templateUrl: './initialize-array.component.html',
  styleUrls: ['./initialize-array.component.css']
})
export class InitializeArrayComponent extends MainModule implements OnInit  {

  allArrayNames: string[] = []; //All names of the arrays

  initArray: string[][] = [];//All the arrays to render on the page

  initTableName : string[] = [];

  //The New Element Text Box for adding new elements to arrays in the Add Element part of the form
  addElementForm = new FormGroup({
    choose: new FormControl(''),
    element: new FormControl(''),
  });

  //The Array List Drop Down Box for changing arrays in the Select Array part of the form
  selectArrayForm = new FormGroup({
    choose: new FormControl(''),
    names: new FormControl(''),

  });

  ngOnInit(): void {
  }

  constructor(router: Router, public arrayService : ArrayService) {
    super();
    this.setEnvironment(router);

    this._service = arrayService;

    if(this.title == '' || this.title == '/'){
      // console.log( "*** InitializeArrayComponent *** '" + this.title +"'");
    }else{
      //Getting the names of the array from the Map
      for (let x of arrayService.arraysMap.keys()) {
        this.allArrayNames.push(x);
      }

      this.context = this._service.receiveContext();

      //Table names
      this.initTableName = this.context.get(this.title).begin.defaultNames;
      //Getting all the array to be rendered on the screen
      this.initArray = this._service.getArrayFromDefaultNames(this.context.get(this.title).begin.defaultNames);


    }

    this.save(false);

  }

  save(shouldRemove:boolean){
    //Remove all elements from the array.
    if(shouldRemove){
      this.removeAllVarVal();
    }


    for (const [index, element] of this.initArray.entries()){
      this.context.get(this.title).variableValues.push(element);
    }

    this.arrayService.sendContext(this.context);
  }


  /*
  Description:
  This method is for the Remove Button on the Initialize Arrays. It removes elements from the array.
  So if you have table array is people ["Cecilie", "Lone", "Emil", "Tobias", "Linus"] and you
  want to remove "Tobias" from the array. If you have initArray containing two arrays, Fruits and
  People. Fruits be with the index 0, and People with index 1. The indexTable is 1 for people Array.
  The rowIndex would be 3 for "Tobias".
  Parameter:
  indexRow - Is the number of the element want to remove from the array
  indexTable - Is the number of the array in the initArray array.
   */
  removeElement(indexRow:number, indexTable:number){

    //This temporary array to store with the array without the removed element
    let removeArray: string[] = [];

    removeArray = HelperService.removeElement(indexRow,this.initArray[ indexTable]);
    HelperService.cloneSingle(removeArray, this.initArray[indexTable]);

    this.save(true);

  }

  /*
   Description:
   Finding the index form the array name. For example initTableName contains Fruits at index 0 and people
    at index 1 then if choose equal people then indexTable would equal 1.
   */
  getTableIndex( tableName: string){
    let indexTable = -1;
    for (const [index, element] of this.initTableName.entries()){
        if(tableName == element) {
          // console.log(index, element);
          indexTable = index;
        }
    }

      return indexTable;
  }

  /*
  Description:
  This method add element to the Initialize Arrays. For example if you want to element
  Jim will be added to people Array.
   */

  addElementEnd(){

    // This element want to add to the array. For example want to add Jim to the people Array
    let element : string | null | never = '';
    //This is drop-down box contain name of the tables. For example the might have Fruit and people to select from.
    let choose : string | null | never = '';

    element = this.addElementForm.value['element']!;
    choose = this.addElementForm.value['choose']!;

    //console.log("The element "+ element +' will be added to ' + choose + ' Array');

    let indexTable = this.getTableIndex(choose);

    // @ts-ignore
    this.initArray[indexTable].push(element);

    this.save(true);

    //Removing the value on the Add Element Form
    this.addElementForm = new FormGroup ({
      choose: new FormControl(''),
      element : new FormControl('')
    });

  }

  selectArray(){

    //All the list of all arrays in Array Services. (Order Integer, Fruits, Unique Integer, and people)
    let names : string | null | never = '';
    //The arrays on the Initialize Arrays of the Webpage. For example the page loads up with Fruits and people
    let choose : string | null | never = '';

    names = this.selectArrayForm.value['names']!;
    choose = this.selectArrayForm.value['choose']!;

    //Removing the value on the Select Array Form
    this.selectArrayForm = new FormGroup({
      choose: new FormControl(''),
      names: new FormControl(''),

    });

    //console.log('The ' + names +' array will be changed for ' + choose + ' array');

    let indexTable = this.getTableIndex(choose);

    //Change the array to render on the screen
    this.initArray[indexTable] = this._service.arraysMap.get(names);
    this.context.get(this.title).begin.defaultNames[indexTable] = names;

    this.save(true);

  }

  /***********************\
   *   Methods for HTML   *
  \***********************/

  getTableName(index:number){

    if(this.initTableName.length == 0 ){
      return "Undefined";
    }else{
      return this.initTableName[index];
    }

  }

  getHelperService(){
    return HelperService;
  }

}
