export class Code {

  private _assignment:string | undefined = '';
  private _call:string | undefined = '';
  private _type:string | undefined = '';
  private _method:string | undefined = '';
  private _methodParentheses:boolean | undefined = true;
  private _logic:string | undefined = '';
  private _typeResults:string | undefined = '';

  constructor(assignment: string | undefined,
              call: string | undefined,
              type: string | undefined,
              method: string | undefined,
              methodParentheses: boolean | undefined,
              logic: string | undefined,
              typeResults: string | undefined) {

    this._assignment = assignment;
    this._call = call;
    this._type = type;
    this._method = method;
    this._methodParentheses = methodParentheses;
    this._logic = logic;
    this._typeResults = typeResults;
  }

  get assignment(): string | undefined {return this._assignment;}
  set assignment(value: string | undefined) {this._assignment = value;}

  get call(): string | undefined {return this._call;}
  set call(value: string | undefined) {this._call = value;}

  get type(): string | undefined {return this._type;}
  set type(value: string | undefined) {this._type = value;}

  get method(): string | undefined {return this._method;}
  set method(value: string | undefined) {this._method = value;}

  get methodParentheses(): boolean | undefined {return this._methodParentheses;}
  set methodParentheses(value: boolean | undefined) {this._methodParentheses = value;}

  get logic(): string | undefined {return this._logic;}
  set logic(value: string | undefined) {this._logic = value;}

  get typeResults(): string | undefined {return this._typeResults;}
  set typeResults(value: string | undefined) {this._typeResults = value;}


}
