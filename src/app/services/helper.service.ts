import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private static pageTitle: string;

  constructor() { }

  /******************\
   * METHODS         *
   \******************/


  //Count the number of elements in the enumeration
  static enumElementCount(enumName: any): number {
    let count = 0
    for(let item in enumName) {
      if(isNaN(Number(item))) count++
    }
    return count
  }


  //This method returns array of enum keys-array or value based on getKeys value.
  static enumElements(enumName: any, getKeys:boolean) : string[]{

    let names: string[] = [];

    //TODO: Make decision to refactor - enumNames is array so makes sense to turn array into a array
    for (let member in enumName){
      //console.log( "Key: " + member + " Value: "+ enumName[member]);

      if(getKeys){
        names.push( member );
      }else{
        names.push( enumName[member] );
      }

    };

    return names;
  };


  /*
   Description:
   Clone Single creates new array than takes the contains of one array copies
   into the other array.
   Parameter:
   originalArray - the single dimensional array where contain data
   cloneArray - the single dimensional array where data copied
  */
  static cloneSingle(originalArray: string[] | undefined, cloneArray: string[]){

    if(typeof cloneArray == 'undefined'){
      cloneArray = [];
    }else{
      //This will remove all elements from-array the array and will actually clean the original array.
      if(cloneArray.length > 0){
        cloneArray.splice(0, cloneArray.length);
      }
    }

    if(typeof originalArray != 'undefined'){
      for (let r = 0; r < originalArray.length; r++) {
        cloneArray.push(originalArray[r]);
      }
    }else{
      console.log('cloneSingle - The Original Array must be defined. ');
    }

  }
  /*
    Description:
      Clone Double copies multidimensional array
    Parameter:
     cloneArray - the array what contain the multidimensional array
  */

  static cloneDouble( originalArray:string[][] ){

    let outerArray = []

    for(  let row = 0; row < originalArray.length; row++){

      let innerArray = [];
      for( let  column = 0; column < originalArray[row].length; column++){
        innerArray.push ( originalArray[row][column] );
      }
      outerArray.push(innerArray);
    }

    return outerArray;

  }

  /*

  Description:
  Remove element for the beginning, middle and end of the array
  Parameter:
  removalIndex - the element want to remove the originalArray array
  originalArray - array where the element will be removed
  */

  static removeElement(removalIndex:number,originalArray:string[] ){

    let newArray:string[] = [];

    for( let index = 0; index < originalArray.length; index++){
      if( removalIndex != index){
        newArray.push(originalArray[index]);
      };
    };

    return newArray
  };

  /*

  Description:
  In the navbar component the router uses the  URLs 'Array/Copy_Within' which is used to
  populate the Title on each page. The '_" has to be removed so the result value is "Copy Within".
  This  method finds the Context Object for the Webpage.
  Parameter:
  url - The URLs for example is 'Array/Copy_Within'
  */


  static convertUrlToTitle(url:string){

    this.pageTitle = url;

    /*
     Removing the prefix from the URLs. Changes Array/Copy_Within to Copy_Within
     */
    if(url.includes("/Array/") || url.includes("/String/") || url.includes("/RegExpr/")){
      this.pageTitle = this.pageTitle.replace("/Array/","");
      this.pageTitle = this.pageTitle.replace("/String/","");
      this.pageTitle = this.pageTitle.replace("/RegExpr/","");
    }

    /*
     Next I remove the "_" from the title. For example Last_Index_Of, there are more than one "_".
     */
    while( this.pageTitle.includes("_")){
      this.pageTitle = this.pageTitle.replace("_", " ");
    }

    return this.pageTitle;
  }

  static convertUrlToType(url:string) {
    return url.substring(
      url.indexOf("/") + 1,
      url.lastIndexOf("/")
    );
  }

  /*

  Description: This method removes all the "_" from label. For example if the label is 'Last_Index_Of' the
  method will return 'Last Index Of'. If there is NO '_' the method will result the same value.

  Parameter:
  label - the label you want to remove the "_" from.
  */
  static cleanLabels(label:string){

    let resultLabel = label;

    while( resultLabel.includes("_")){
        resultLabel= resultLabel.replace("_", " ");
    }

    return  resultLabel;
  }

  /***********************\
   * JSON Populate Check  *
  \***********************/
 /*
  When populating the Context Classes you are using JSON that sometime the Key/Value are not populated
  ,so the code have check if the field in the JSON has value or not.
  */

  /*
   Method Name: checkType
   Description: This method checks the checkValue parameter which for example has the value for ShouldCompare field.
   The type parameter contain the type the ShouldCompare is which in this case should be boolean. The return value if
   the test passes or fails the check.
   Parameter:
      checkValue - The JSON field the check if contain data or not.
      type - The JSON field type for example is boolean, string, etc....
   */

  static checkType(checkValue:any,type:string){
    if(typeof checkValue === type){
      return true;
    }else{
      return false;
    }
  };
  static checkNotType(checkValue:any,type:string){
    if(typeof checkValue !== type){
      return true;
    }else{
      return false;
    }
  };


  static checkNotUndef(checkValue1:any){
     return HelperService.checkNotType(checkValue1,'undefined');
  }


  static checkNotUndefined(checkValue1:any,checkValue2:any){

    return HelperService.checkNotType(checkValue1,'undefined') && HelperService.checkNotType(checkValue2,'undefined');

  }



}
