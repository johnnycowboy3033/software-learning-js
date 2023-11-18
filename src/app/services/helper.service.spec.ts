import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import {ContextComponentType} from "../enumerates/context/context-component-type";

describe('HelperService', () => {
  let service: HelperService;
  let oneToFive = [ '1', '2', '3', '4', '5'];
  let oneToSix = [ '1', '2', '3', '4', '5', '6'];


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /******************\
   * METHODS         *
  \******************/

  it('(enumElementCount) should tell you how many enum in ContextComponentType which is  4', () => {

   let resultCount = HelperService.enumElementCount(ContextComponentType);

    expect(resultCount).toEqual(4);

  });

  it('(enumElements) should the KEYS for ContextComponentType', () => {

    let resultEnumKeys = HelperService.enumElements(ContextComponentType,true);

    //console.log(resultEnum);

    expect(resultEnumKeys.length).toEqual(4);
    expect(resultEnumKeys).toEqual(['Array', 'RegExr', 'String', 'Content']);

  });

  it('(enumElements) should the VALUES for ContextComponentType', () => {

    let resultEnumValues = HelperService.enumElements(ContextComponentType,false);

    //console.log(resultEnumValues);

    expect(resultEnumValues.length).toEqual(4);
    expect(resultEnumValues).toEqual(['Array', 'Regular Expression', 'String', 'Content']);

  });

  it('(cloneSingle) should clone element so the two array are the same', () => {

    let testArray: string[] = [];

    HelperService.cloneSingle(oneToFive, testArray);

    for(let index = 0 ; index < testArray.length ; index++){
      expect( testArray[index]  ).toEqual( oneToFive[index]  );
    }

  });

  it('(cloneDouble) should ', () => {

    let testArray: string[][] = [];

    testArray.push(oneToFive);
    testArray.push(oneToSix);

    let resultArray = HelperService.cloneDouble(testArray);

/*    for(let n = 0; n < resultArray.length; n++){

      console.log( "Outer Array Index: " + n );
        for(let m = 0; m < resultArray[n].length; m++){
            console.log( '['+[m]+'] =' + resultArray[n][m] );
        }

    }*/

    expect( resultArray.length  ).toEqual( 2  );
    expect( resultArray[0]  ).toEqual( [ '1', '2', '3', '4', '5']  );
    expect( resultArray[1]  ).toEqual( [ '1', '2', '3', '4', '5', '6']  );

  });


  it('(removeElement) should remove element so the length-string be reduce-array by one element', () => {

    let testArray: string [] = []

    HelperService.cloneSingle(oneToFive, testArray);

    let arraySize : number = testArray.length;

    let newArray:string[]  = HelperService.removeElement(0, testArray);

    expect( arraySize -1 ).toEqual( newArray.length);

  });


  it('(removeElement) should remove element so the first element should be removed', () => {

    let testArray: string [] = []

    HelperService.cloneSingle(oneToFive, testArray);

    let newArray:string[]  = HelperService.removeElement(0, testArray);

    for(let index = 0 ; index < newArray.length ; index++){
      expect( String(index + 2)).toEqual( newArray[index] );
    }

  });

  it('(removeElement) should remove element so the middle element should be removed', () => {

    let testArray: string [] = []

    HelperService.cloneSingle(oneToFive, testArray);

    let newArray:string[]  = HelperService.removeElement(2, testArray);

    expect( String(1 )).toEqual( newArray[0] );
    expect( String(2 )).toEqual( newArray[1] );
    expect( String(4 )).toEqual( newArray[2] );
    expect( String(5 )).toEqual( newArray[3] );

  });

  it('(removeElement) should not remove element so the array should be unchanged', () => {

    let testArray: string [] = []

    HelperService.cloneSingle(oneToFive, testArray);

    let newArray:string[]  = HelperService.removeElement(5, testArray);

    expect( String(1 )).toEqual( newArray[0] );
    expect( String(2 )).toEqual( newArray[1] );
    expect( String(3 )).toEqual( newArray[2] );
    expect( String(4 )).toEqual( newArray[3] );
    expect( String(5 )).toEqual( newArray[4] );

  });

  it('(convertUrlToTitle) "/Array/Last_Index_Of" should be "Last Index Of"', () => {

    let title = HelperService.convertUrlToTitle("/Array/Last_Index_Of");

    expect('Last Index Of').toEqual(title);
  });


  it('(convertUrlToType) "/String/Character_At" should be "String"', () => {

    let type = HelperService.convertUrlToType("/String/Character_At");

    // console.log("Type: " + type);

    expect('String').toEqual(type);
  });

  it('(convertUrlToType) "/Array/Last_Index_Of" should be "Array"', () => {

    let type = HelperService.convertUrlToType("/Array/Last_Index_Of");

    // console.log("Type: " + type);

    expect('Array').toEqual(type);
  });


  it('(convertUrlToType) "/RegExpr/Object_Constructor" should be "RegExpr"', () => {

    let type = HelperService.convertUrlToType("/RegExpr/Object_Constructor");

    // console.log("Type: " + type);

    expect('RegExpr').toEqual(type);
  });


  it('(cleanLabels) "Last_Index_Of" should be "Last Index Of"', () => {

    let resultLabel = HelperService.cleanLabels("Last_Index_Of");

    expect('Last Index Of').toEqual(resultLabel);
  });

  it('(cleanLabels) "Fruits" should be "Fruits"', () => {

    let resultLabel = HelperService.cleanLabels("Fruits");

    expect('Fruits').toEqual(resultLabel);
  });

  it('(checkType) CheckValue should be String', () => {

    expect(HelperService.checkType(" ", "string")).toBeTrue();
  });

  it('(checkType) CheckValue should NOT be Number', () => {

    expect(HelperService.checkType(" ", "number")).toBeFalse();
  });

  it('( checkNotType) CheckValue should NOT be Number', () => {

    expect(HelperService. checkNotType(" ", "number")).toBeTrue();
  });

  it('( checkNotType ) CheckValue should NOT be Number', () => {

    expect(HelperService. checkNotType(" ", "undefined")).toBeTrue();
  });

  it('( checkNotType ) CheckValue should NOT be Number', () => {

    expect(HelperService. checkNotType(" ", "undefined")).toBeTrue();
  });

  it('( checkNotUndefined ) should true because the JSON is defined', () => {

    let data = { Call:{ Code: "array1.join()"}};

    expect(HelperService.checkNotUndefined(data.Call, data.Call.Code)).toBeTrue();
  });

  it('( checkNotUndefined ) should false because the  JSON is undefined', () => {

    let data = { Call:{ Code: undefined}};

    expect(HelperService.checkNotUndefined(data.Call, data.Call.Code)).toBeFalse();
  });


});
