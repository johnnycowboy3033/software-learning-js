import { Injectable } from '@angular/core';
import {MainService} from "../main.service";

import {ContextRegExpr} from "../../classes/reg-expr/context-reg-expr";
import {ContextComponentType} from "../../enumerates/context/context-component-type";

import {RegExprComponentNames} from "../../enumerates/reg-expr/reg-expr-component-names";
import {RegExprNames} from "../../enumerates/reg-expr/reg-expr-names";
import {RegExprTypeResults} from "../../enumerates/reg-expr/reg-expr-type-results";


@Injectable({
  providedIn: 'root'
})
export class RegExprService extends MainService{


  /***************************************************************\
   * STRINGS
   *
   * Description:
   * The below strings are used to populate the Initialize Component.
   **************************************************************/

  /*
  Contains of the tables. The items in this array should not change. They are used
  on the Initialize Component.
  */

  //Tables Map Values
  FatCat:string='The fat cat ran down the street by the Cat Club.';
  Football:string='table football, foosball';
  Fox:string='The quick brown fox jumps over the lazy dog. It barked.';
  TestTwo:string='test1test2';
  Ball:string='ball bat';
  Foo:string='foo bar foo bar foo';
  Dot:string='bar\\nexample foo example';
  Fish:string='a small fish';
  Dog:string="Today, the man and the dog went to the park.";
  Apple:string='re apple, green apple, red apple, green apple, gren apple, gr apple, blue apple, yellow apple';
  River:string='With no rivers or wells for fresh water';
  Brisket:string='brisket chop non-profit';
  Mom:string='Mom loves Mom is the sentences';
  Hot:string='That hot!';
  HundredPercent:string='Give 100%!';
  Look:string='HELLO, LOOK AT YOU';
  W3Schools:string='Visit W3Schools. Hello World!';
  W3Schools_Null:string='Visit W3Schools.\0Learn Javascript.';
  W3Schools_New_Line:string='Visit W3Schools.\nLearn Javascript.';
  W3Schools_Form_Feed:string='Visit W3Schools.\fLearn Javascript.';
  W3Schools_Carriage_Return:string='Visit W3Schools.\rLearn Javascript.';
  W3Schools_Tab:string='Visit W3Schools.\tLearn Javascript.';
  W3Schools_Vertical_Tab:string='Visit W3Schools.\vLearn Javascript.';
  W3Schools_Hellooo:string='Hellooo World! Hello W3Schools!';
  DecimalPlace:string='1, 100 or 1000?';
  Is:string='Is this his';
  IsAll:string='Is this all there is';


  constructor() {
    super();

    this.arraysMap.set(RegExprNames.FatCat,this.FatCat);
    this.arraysMap.set(RegExprNames.Football,this.Football);
    this.arraysMap.set(RegExprNames.Fox,this.Fox);
    this.arraysMap.set(RegExprNames.TestTwo,this.TestTwo);
    this.arraysMap.set(RegExprNames.Ball,this.Ball);
    this.arraysMap.set(RegExprNames.Foo,this.Foo);
    this.arraysMap.set(RegExprNames.Dot,this.Dot);
    this.arraysMap.set(RegExprNames.Fish,this.Fish);
    this.arraysMap.set(RegExprNames.Dog,this.Dog);
    this.arraysMap.set(RegExprNames.Apple,this.Apple);
    this.arraysMap.set(RegExprNames.River,this.River);
    this.arraysMap.set(RegExprNames.Brisket,this.Brisket);
    this.arraysMap.set(RegExprNames.Mom,this.Mom);
    this.arraysMap.set(RegExprNames.Hot,this.Hot);
    this.arraysMap.set(RegExprNames.HundredPercent, this.HundredPercent);
    this.arraysMap.set(RegExprNames.Look, this.Look);
    this.arraysMap.set(RegExprNames.W3Schools, this.W3Schools);
    this.arraysMap.set(RegExprNames.W3Schools_Null, this.W3Schools_Null);
    this.arraysMap.set(RegExprNames.W3Schools_New_Line, this.W3Schools_New_Line);
    this.arraysMap.set(RegExprNames.W3Schools_Form_Feed, this.W3Schools_Form_Feed);
    this.arraysMap.set(RegExprNames.W3Schools_Carriage_Return, this.W3Schools_Carriage_Return);
    this.arraysMap.set(RegExprNames.W3Schools_Tab, this.W3Schools_Tab);
    this.arraysMap.set(RegExprNames.W3Schools_Vertical_Tab, this.W3Schools_Vertical_Tab);
    this.arraysMap.set(RegExprNames.W3Schools_Hellooo, this.W3Schools_Hellooo);
    this.arraysMap.set(RegExprNames.DecimalPlace, this.DecimalPlace);
    this.arraysMap.set(RegExprNames.Is, this.Is);
    this.arraysMap.set(RegExprNames.IsAll, this.IsAll);

    this.context.set('/',
      new ContextRegExpr({ComponentType : ContextComponentType.RegExr}
      ));

    this.context.set(RegExprComponentNames.ObjectLiteral,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "There are two ways to create a RegExp object: a literal notation and a constructor.",
          Code:{
            Call:'var regex = /cat/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          TablesCode:'/pattern/modifiers;',
          MethodTable:{
            Parameter :['pattern','modifier'],
            Description:[
              'Required. A regular expression is an object that describes a pattern of characters.',
              'Optional. Modifiers are used to change perform of the Regular Expression.',
            ] },
          Begin:{ DefaultNames:[RegExprNames.FatCat]},
        }
      ));


    this.context.set(RegExprComponentNames.ObjectConstructor,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "There are two ways to create a RegExp object: a literal notation and a constructor.",
          Code:{
            Call:'var regex = new RegExp("cat", "gi");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          TablesCode:'new RegExp(pattern, modifier)',
          MethodTable:{
            Parameter :['pattern','modifier'],
            Description:[
              'Required. A regular expression is an object that describes a pattern of characters.',
              'Optional. Modifiers are used to change perform of the Regular Expression.',
            ] },
          Begin:{ DefaultNames:[RegExprNames.FatCat]},
        }
      ));

    this.context.set(RegExprComponentNames.Exec,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The exec() method executes a search for a match in a specified string. Returns a result array (match_value,index,inpute_string,group_name), or null.",
          Code:{
            Call:'var regex = RegExp("foo*", "g");',
            TypeResults: RegExprTypeResults.ExecMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Football]},
        }
      ));

    this.context.set(RegExprComponentNames.Test,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The test() method executes a search for a match between a regular expression and a specified string. Return boolean.",
          Code:{
            Call:'var regex = new RegExp("foo*", "g");',
            TypeResults: RegExprTypeResults.ReturnBoolean,
          },
          Begin:{ DefaultNames:[RegExprNames.Football]},
        }
      ));

    this.context.set(RegExprComponentNames.Match,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The match() method retrieves the result of matching a string of the match in an array.",
          Code:{
            Call:'var regex = new RegExp("[A-Z]", "g");',
            TypeResults: RegExprTypeResults.MatchMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Fox]},
        }
      ));

    this.context.set(RegExprComponentNames.Match_All,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.",
          Code:{
            Call:'var regex = /t(e)(st(\\d?))/g;',
            TypeResults: RegExprTypeResults.MatchAllMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.TestTwo]},
        }
      ));

    this.context.set(RegExprComponentNames.Replace,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The replace() method returns a new string with first of a pattern replaced by a replacement. Replace first occurrence.",
          Code:{
            Call:'var new_string = str.replace("dog", "monkey") ',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.TestTwo]},
        }
      ));

    this.context.set(RegExprComponentNames.Replace_All,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.",
          Code:{
            Call:'var regex = /b/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Ball]},
        }
      ));

    this.context.set(RegExprComponentNames.Search,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: "The search() method executes a search for a match between a regular expression and this String object. Return index first occurrence.",
          Code:{
            Call:'var regex = /dog/;',
            TypeResults: RegExprTypeResults.SearchMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Fox]},
        }
      ));


    this.context.set(RegExprComponentNames.Start_End_Indices,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'The "d" flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group. ',
          Code:{
            Call:'var regex = new RegExp("foo", "gd");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Foo]},
        }
      ));


    this.context.set(RegExprComponentNames.Global,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'The "g" flag indicates that the regular expression should be tested against all possible matches in a string. A regular expression defined as both global ("g") and sticky ("y") will ignore the global flag and perform sticky matches. ',
          Code:{
            Call:'var regex = new RegExp("foo", "g");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Foo]},
        }
      ));

    this.context.set(RegExprComponentNames.Case_Insensitive,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'Does a case-insensitive search.',
          Code:{
            Call:'var regex = new RegExp("foo", "gi");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Foo]},
        }
      ));

    this.context.set(RegExprComponentNames.Match_Newline,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'Allows to match newline characters.',
          Code:{
            Call:'var regex = new RegExp("bar.example","s");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Dot]},
        }
      ));

    this.context.set(RegExprComponentNames.Unicode,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '"unicode"; treat a pattern as a sequence of unicode code points. Unicode Character "LATIN SMALL LETTER A" (U+0061)',
          Code:{
            Call:'var regex = new RegExp("u{61}", "u");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Fish]},
        }
      ));

    this.context.set(RegExprComponentNames.Sticky,
        new ContextRegExpr({
        ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'Perform a "sticky" search that matches starting at the current position in the target string. The search is the word (the), space( ), and many letters. With the Sticky Flag set the system look for match at the Last Index. The system does not look for match any other place in the sentence.',
          Code:{
            Call:'var regex = new RegExp("the [a-zA-Z]+", "y");',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Dog]},
        }
      ));

    this.context.set(RegExprComponentNames.Matches_Either,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: ' (x|y) - Matches either "x" or "y". For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".',
          Code:{
            Call:'var regex = /(red|green)/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Apple]},
        }
      ));

    this.context.set(RegExprComponentNames.Matches_Any_One,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '•\t[xyz] or [a-c] - A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "c" in "chop". For example, [abcd-] and [-abcd] match the "b" in "brisket", the "c" in "chop", and the "-" (hyphen) in "non-profit".',
          Code:{
            Call:'var regex = /[aeiouy]/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.River]},
        }
      ));

    this.context.set(RegExprComponentNames.Negated,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '[^xyz] or [^a-c] - A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.\n' +
            'For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".\n',
          Code:{
            Call:'var regex = /[^aeiouy]/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Brisket]},
        }
      ));

    this.context.set(RegExprComponentNames.Capturing_Group,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '(x) - Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar".\n' +
            '\\n -Where "n" is a positive integer. \\1 refers to the first capturing group in the regular expression. \\2 will refer to the second capturing group and \\n will refer to an nth capturing group.\n' +
            'Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, /apple(,)\\sorange\\1/ matches "apple, orange," in "apple, orange, cherry, peach".\n',
          Code:{
            Call:'var regex = /(Mom) loves \\1/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Mom]},
        }
      ));

    this.context.set(RegExprComponentNames.Single,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '. - Find a single character, except newline or line terminator',
          Code:{
            Call:'var regex = /h.t/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Hot]},
        }
      ));

    this.context.set(RegExprComponentNames.Word,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\w - Find a word character. A word character is a character a-z, A-Z, 0-9, including _ (underscore).',
          Code:{
            Call:'var regex  = /\\w/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Non_Word,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\W - Find a non-word character.',
          Code:{
            Call:'var regex  = /\\W/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Digit,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\d - Find a digit character',
          Code:{
            Call:'var regex  = /\\d/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Non_Digit,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\D - Find a non-digit character.',
          Code:{
            Call:'var regex  = /\\D/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Whitespace,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\s - Find a whitespace character.',
          Code:{
            Call:'var regex  = /\\s/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Non_Whitespace,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\S - Find a non-whitespace character.',
          Code:{
            Call:'var regex  = /\\S/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.HundredPercent]},
        }
      ));

    this.context.set(RegExprComponentNames.Beginning_End_Word,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\b - Find a match at the beginning/end of a word, beginning like this: \\bHI, end like this: HI\\b.',
          Code:{
            Call:'var regex = /\\bLO/; var regex = /LO\\b/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Look]},
        }
      ));

    this.context.set(RegExprComponentNames.Non_Beginning_End_Word,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\B - Find a match, but not at the beginning/end of a word.',
          Code:{
            Call:'var regex = /\\BLO/; var regex = /LO\\B/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Look]},
        }
      ));

    this.context.set(RegExprComponentNames.Null,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\0 - Find a NULL character.',
          Code:{
            Call:'var regex  = /\\0/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Null]},
        }
      ));

    this.context.set(RegExprComponentNames.New_Line,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\n - Find a new line character.',
          Code:{
            Call:'var regex  = /\\n/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_New_Line]},
        }
      ));

    this.context.set(RegExprComponentNames.Form_Feed,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\f - Find a form feed character.',
          Code:{
            Call:'var regex  = /\\f/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Form_Feed]},
        }
      ));

    this.context.set(RegExprComponentNames.Carriage_Return,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\r - Find a carriage return character.',
          Code:{
            Call:'var regex  = /\\r/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Carriage_Return]},
        }
      ));

    this.context.set(RegExprComponentNames.Tab,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\t - Find a tab character.',
          Code:{
            Call:'var regex  = /\\t/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Tab]},
        }
      ));

    this.context.set(RegExprComponentNames.Vertical_Tab,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\v - Find a vertical tab character.',
          Code:{
            Call:'var regex  = /\\v/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Vertical_Tab]},
        }
      ));

    this.context.set(RegExprComponentNames.Octal_Number,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\xxx - Find the character specified by an octal number xxx. Do a global search for octal number 127 (W) in a string',
          Code:{
            Call:'var regex  = /\\127/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools]},
        }
      ));

    this.context.set(RegExprComponentNames.Hexadecimal_Number,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '\\xdd - Find the character specified by a hexadecimal number dd. \\udddd - Find the Unicode character specified by a hexadecimal number dddd.Do a global search for the hexadecimal number 57 (W) in a string',
          Code:{
            Call:'var regex  = /\x57/g; var regex  = /\u0057/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools]},
        }
      ));
    this.context.set(RegExprComponentNames.At_Least_One,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'n+ - Matches any string that contains at least one n.',
          Code:{
            Call:'var regex  = /o+/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.W3Schools_Hellooo]},
        }
      ));

    this.context.set(RegExprComponentNames.Zero_Or_More,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'n* - Matches any string that contains zero or more occurrences of n.',
          Code:{
            Call:'var regex  = /10*/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.DecimalPlace]},
        }
      ));

    this.context.set(RegExprComponentNames.Zero_Or_One,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'n? - Matches any string that contains zero or one occurrence of n.',
          Code:{
            Call:'var regex  = /10?/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.DecimalPlace]},
        }
      ));

    this.context.set(RegExprComponentNames.Sequence_Of,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'n{X} - Matches any string that contains a sequence of X n\'s. n{X,Y} - Matches any string that contains a sequence of X to Y n\'s. n{X,} - Matches any string that contains a sequence of at least X n\'s.',
          Code:{
            Call:'var regex  = /\\d{4}/g; var regex  = /\\d{3,4}/g; var regex  = /\\d{3,}/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.DecimalPlace]},
        }
      ));

    this.context.set(RegExprComponentNames.End,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: 'n$ - Matches any string with n at the end of it.',
          Code:{
            Call:'var regex  = /is$/;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Is]},
        }
      ));

    this.context.set(RegExprComponentNames.Beginning,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '^n - Matches any string with n at the beginning of ',
          Code:{
            Call:'var regex  = /^Is/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.Is]},
        }
      ));

    this.context.set(RegExprComponentNames.Specific_String,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '?=n - Matches any string that is followed by a specific string n.',
          Code:{
            Call:'var regex  = /is(?= all)/g;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.IsAll]},
        }
      ));

    this.context.set(RegExprComponentNames.Non_Specific_String,
      new ContextRegExpr({
          ComponentType : ContextComponentType.RegExr,
          CodeDescription: '?!n - Matches any string that is not followed by a specific string n.',
          Code:{
            Call:'var regex  = /is(?! all)/gi;',
            TypeResults: RegExprTypeResults.ReplaceMethod,
          },
          Begin:{ DefaultNames:[RegExprNames.IsAll]},
        }
      ));

  }


}
