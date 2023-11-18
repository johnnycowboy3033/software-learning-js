export class Begin {

  private _defaultNames: string[] = [];

  constructor(defaultNames: string[]) {
    this._defaultNames = defaultNames;
  }

  get defaultNames(): string[] {return this._defaultNames;}
  set defaultNames(value: string[]) {this._defaultNames = value;}
}
