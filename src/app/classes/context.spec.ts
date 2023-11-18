import { Context } from './context';
import {ContextComponentType} from "../enumerates/context/context-component-type";

describe('Context', () => {
  it('should create an instance', () => {
    expect(new Context({ComponentType : ContextComponentType.Content} )).toBeTruthy();
  });
});
