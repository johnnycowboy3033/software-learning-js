import { ContextRegExpr } from './context-reg-expr';
import {ContextComponentType} from "../../enumerates/context/context-component-type";

describe('ContextRegExpr', () => {
  it('should create an instance', () => {
    expect(new ContextRegExpr({ ComponentType : ContextComponentType.RegExr})).toBeTruthy();
  });
});
