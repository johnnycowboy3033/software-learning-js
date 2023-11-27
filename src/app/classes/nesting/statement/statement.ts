export class Statement {

    private _assignment:string | undefined = '';
    private _value:string | undefined = '';


    constructor(assignment: string | undefined, value: string | undefined) {
        this._assignment = assignment;
        this._value = value;
    }

    get assignment(): string | undefined {return this._assignment;}
    set assignment(value: string | undefined) {this._assignment = value;}

    get value(): string | undefined {return this._value;}
    set value(value: string | undefined) {this._value = value;}
}
