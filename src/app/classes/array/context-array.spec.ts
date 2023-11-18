import { ContextArray } from './context-array';
import {ContextComponentType} from "../../enumerates/context/context-component-type";
import {ArrayNames} from "../../enumerates/array/array-names";
import {TestBed} from "@angular/core/testing";
import {ArrayService} from "../../services/array/array.service";

describe('ContextArray', () => {

  let empty : ContextArray;
  let contextArray : ContextArray;

  beforeEach(() => {

    empty = new ContextArray( {
      ComponentType : ContextComponentType.Array,
    });

    contextArray = new ContextArray( {
      ComponentType : ContextComponentType.Array,
      Begin:{DefaultNames: [ArrayNames.Fruits,ArrayNames.Peoples]}
    });

  });

  /*********\
   * empty  *
  \*********/

  it('empty should create an instance', () => {
    expect(empty).toBeTruthy();
  });

  it('empty  should equal Array', () => {
    expect(empty.componentType ).toEqual( ContextComponentType.Array );
  });

  it('DefaultNames length should equal undefined', () => {
    expect(empty.begin?.defaultNames).toEqual( undefined);
  });

  /*****************\
   * contextArray  *
   \****************/

  it('contextArray should create an instance', () => {
    expect(contextArray).toBeTruthy();
  });



  it('componentType should equal Array', () => {
    expect(contextArray.componentType ).toEqual( ContextComponentType.Array );
  });

  it('DefaultNames length should equal 2 because it contains Fruits and Peoples', () => {
    expect(contextArray.begin?.defaultNames.length ).toEqual( 2);
    expect(contextArray.begin?.defaultNames[0]).toEqual( ArrayNames.Fruits );
    expect(contextArray.begin?.defaultNames[1]).toEqual( ArrayNames.Peoples );
  });



});
