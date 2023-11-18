import { Results } from './results';
import {ArrayTypeResults} from "../enumerates/array/array-type-results";
import {TestBed} from "@angular/core/testing";
import {ArrayService} from "../services/array/array.service";
import {ContextArray} from "./array/context-array";
import {ContextComponentType} from "../enumerates/context/context-component-type";

describe('Results', () => {

  let context_array :ContextArray;
  let results_array: Results;

  beforeEach(() => {

    let data_context_array = {
      ComponentType : ContextComponentType.Array,
    };
    context_array = new ContextArray( data_context_array );

    let data_array = {
      ShowPage: true,
      TypeResults:ArrayTypeResults.ResultArray,
    }
    results_array= new Results(data_array);
  });


  it('should create an instance', () => {
    expect(new Results({ShowPage:true})).toBeTruthy();
  });

/*  it('(resultArray) should create an instance', () => {

    if( typeof  results_array != "undefined" && typeof  context_array != "undefined" ){
      results_array.run(context_array);
    }


  });*/

});
