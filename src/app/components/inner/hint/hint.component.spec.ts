import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintComponent } from './hint.component';

import {ContextArray} from "../../../classes/array/context-array";
import {ContextComponentType} from "../../../enumerates/context/context-component-type";

import {ArrayNames} from "../../../enumerates/array/array-names";
import {ArrayVariables} from "../../../enumerates/array/array-variables";
import {ArrayComponentNames} from "../../../enumerates/array/array-component-names";
import {ArrayTypeResults} from "../../../enumerates/array/array-type-results";

describe('HintComponent', () => {
  let component: HintComponent;
  let fixture: ComponentFixture<HintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.context.set(ArrayComponentNames.Concatenate,
      new ContextArray( {
          ComponentType : ContextComponentType.Array,
          Begin:{DefaultNames: [ArrayNames.Fruits,ArrayNames.people]},
          CodeDescription:"Join several arrays into one.",
          Code:{
            Call:ArrayVariables.Object + '.concat( '+ ArrayVariables.ParameterFirst + ' );',
            TypeResults: ArrayTypeResults.ResultArray,
          }
        }
      ));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('( replaceSymbols - Hard Code Parameters ) should array1 with fruits and array2 with people', () => {

    component.title = ArrayComponentNames.Concatenate;
    component.contextMap = component.context.get(component.title);

    let displayCall = component.replaceSymbols(ArrayVariables.Object + '.concat( '+ ArrayVariables.ParameterFirst + ' );');

/*    console.log('displayCall: ' + displayCall);*/

    expect(displayCall).toEqual("fruits.concat( people );");

  });

  it('( replaceSymbols - Get Parameters from Context Array Object) should array1 with fruits and array2 with people', () => {

    component.title = ArrayComponentNames.Concatenate;
    component.contextMap = component.context.get(component.title);

    // console.log( " Code Call: " + contextArray.code.call);

    let displayCall = component.replaceSymbols(component.contextMap.code.call);

    // console.log('displayCall: ' + displayCall);

    expect(displayCall).toEqual("fruits.concat( people );");

  });


});
