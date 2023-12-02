import { TestBed } from '@angular/core/testing';

import { ArrayService } from './array.service';
import {ArrayNames} from "../../enumerates/array/array-names";

describe('ArrayService', () => {
  let service: ArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be the Fruits and people arrays', () => {
    let  resultArray = service.getArrayFromDefaultNames([ArrayNames.Fruits,ArrayNames.people]);
    expect(resultArray.length).toEqual(2);
    expect(resultArray[0]).toEqual([ 'Banana', 'Orange', 'Melon', 'Apple', 'Mango', 'Berries', 'Watermelon' ]);
    expect(resultArray[1]).toEqual([ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ] );
  });




});
