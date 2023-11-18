import { ContextString } from './context-string';
import {ContextComponentType} from "../../enumerates/context/context-component-type";

describe('ContextString', () => {
  it('should create an instance', () => {
    expect(new ContextString({ComponentType : ContextComponentType.String})).toBeTruthy();
  });
});
