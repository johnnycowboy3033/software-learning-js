import {Context} from "../context";

export class ContextRegExpr extends Context {

  constructor(data:{
    ComponentType:string,
    Begin?: {
      DefaultNames?:string[]
    },
    CodeDescription?:string,
    Code?:{
      Call?:string,
      Type?:string,
      Method?:string,
      MethodParentheses?:boolean,
      Logic?:string,
      TypeResults?:string
    },
    TablesCode?:string,
    MethodTable?:{
      Parameter?:string[],
      Description?:string[]
    },
    ArgumentTable?:{
      Argument?:string[],
      Description?:string[]
    }

  }) {
    super(data);
  }
}
