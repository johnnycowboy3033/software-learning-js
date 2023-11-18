import { Injectable } from '@angular/core';
import {MainService} from "../main.service";

import {ContextString} from "../../classes/string/context-string";
import {ContextComponentType} from "../../enumerates/context/context-component-type";

import {StringNames} from "../../enumerates/string/string-names";
import {StringComponentNames} from "../../enumerates/string/string-component-names";
import {StringTypeResults} from "../../enumerates/string/string-type-results";
import {StringVariables} from "../../enumerates/string/string-variables";



@Injectable({
  providedIn: 'root'
})
export class StringService extends MainService{

  /***************************************************************\
   * STRINGS
   *
   * Description:
   * The below strings are used to populate  the Initialize Component.
   **************************************************************/

  /*
  Map that contains Key is name of the array and Value is an array.
  */
  strings = new Map(); //Stores Lists of Arrays to apply the JavaScript Array Functions

  /*
  Contains of the tables. The items in this array should not change. They are used
  on the Initialize Component.
  */

  //Tables Map Values
  HelloWorld:string='Hello World';
  HelloWorldSpace:string='   Hello World   ';
  FirstName:string='Tom';
  MiddleName:string='Bob';
  LastName:string='Smith';
  Spain:string= 'The rain in SPAIN stays mainly in the plain';
  Planet:string='Hello planet earth, you are a great planet.';
  A:string='A';
  C:string='C';


  constructor() {
    super();

    this.arraysMap.set(StringNames.HelloWorld,this.HelloWorld);
    this.arraysMap.set(StringNames.HelloWorldSpace,this.HelloWorldSpace);
    this.arraysMap.set(StringNames.FirstName, this.FirstName);
    this.arraysMap.set(StringNames.MiddleName, this.MiddleName);
    this.arraysMap.set(StringNames.LastName, this.LastName);
    this.arraysMap.set(StringNames.Spain, this.Spain);
    this.arraysMap.set(StringNames.Planet, this.Planet);
    this.arraysMap.set(StringNames.A, this.A);
    this.arraysMap.set(StringNames.C, this.C);

    this.context.set('/',
      new ContextString({ComponentType : ContextComponentType.String}
      ));


    this.context.set(StringComponentNames.CharacterAt,
      new ContextString({
        ComponentType: ContextComponentType.String,
        CodeDescription: "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",
        Code: {
          Call: StringVariables.Object + '.charAt(0);',
          TypeResults: StringTypeResults.ResultString,
        },
        Begin: {
          DefaultNames: [StringNames.HelloWorld]
        }
      })
    );


    this.context.set(StringComponentNames.CharacterCodeAt,
      new ContextString({
        ComponentType: ContextComponentType.String,
        CodeDescription: "The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. Return the Unicode of the first character in a string (the Unicode value for 'H').",
        Code: {
          Call: StringVariables.Object + '.charCodeAt(0);',
          TypeResults: StringTypeResults.ResultNumber,
        },
        Begin: {
          DefaultNames: [StringNames.HelloWorld]
        }
      })
    );

    this.context.set(StringComponentNames.Concatenate,
      new ContextString({
        ComponentType: ContextComponentType.String,
        CodeDescription: "The concat() function takes one or more parameters, and returns the modified string. Strings in JavaScript are immutable, so concat() doesn't modify the string in place.",
        Code: {
          Call: StringVariables.Object + '.concat(" ",'+ StringVariables.ParameterFirst +'," ", '+ StringVariables.ParameterSecond +');',
          TypeResults: StringTypeResults.ResultString,
        },
        Begin: {
          DefaultNames: [StringNames.FirstName, StringNames.MiddleName, StringNames.LastName]
        }
      })
    );

    this.context.set(StringComponentNames.EndsWith,
      new ContextString({
        ComponentType: ContextComponentType.String,
        CodeDescription: "Check if a string ends with",
        Code: {
          Call: StringVariables.Object + '.endsWith("World");',
          TypeResults: StringTypeResults.ResultBoolean,
        },
        Begin: {
          DefaultNames: [StringNames.HelloWorld]
        }
      } )
    );

    this.context.set(StringComponentNames.FromCharacterCode,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Convert a Unicode number into a character.",
          Code:{
            Call:'String.fromCharCode(65);',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[]
          }
      })
    );

    this.context.set(StringComponentNames.Includes,
      new ContextString( {
        ComponentType: ContextComponentType.String,
          CodeDescription:"Check if a string includes a certain string.",
          Code:{
            Call:StringVariables.Object + '.includes("SPAIN");',
            TypeResults: StringTypeResults.ResultBoolean,
          },
          Begin: {
          DefaultNames:[StringNames.Spain]
          },
        })
    );

    this.context.set(StringComponentNames.IndexOf,
      new ContextString({
          ComponentType: ContextComponentType.String,
          CodeDescription:"Search for the first occurrence of a certain String. Return the index of the position of the first character in the Character array.",
          Code:{
            Call:StringVariables.Object + '.indexOf ("SPAIN");',
            TypeResults: StringTypeResults.ResultNumber,
          },
          Begin: {
            DefaultNames:[StringNames.Spain]
          },
        })
    );

    this.context.set(StringComponentNames.LastIndexOf,
      new ContextString( {
        ComponentType: ContextComponentType.String,
          CodeDescription:"Search a string for the last occurrence of a certain String. Return the index of the position of the first character in the Character array.",
          Code:{
            Call:StringVariables.Object + '.lastIndexOf("planet");',
            TypeResults: StringTypeResults.ResultNumber,
          },
          Begin: {
          DefaultNames:[StringNames.Planet]
          },
        })
    );

    this.context.set(StringComponentNames.Length,
      new ContextString( {
        ComponentType: ContextComponentType.String,
          CodeDescription:"Return the number of characters in a string",
          Code:{
            Call:StringVariables.Object + '.length;',
            TypeResults: StringTypeResults.ResultNumber,
          },
          Begin: {
          DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.LocaleCompare,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"A Number indicates whether the reference string comes before, after, or is the same as the compare string in sort order. Returns one of three values:",
          Code:{
            Call:StringVariables.Object + '.localeCompare(string1);',
            TypeResults: StringTypeResults.ResultNumber,
          },
          Begin: {
            DefaultNames:[StringNames.A, StringNames.C]
          }
        })
    );

    this.context.set(StringComponentNames.Match,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Search for the same pattern in a string using Regular Expressions.",
          Code:{
            Call:StringVariables.Object + '.match(/ain/g);',
            TypeResults: StringTypeResults.ResultArray,
          },
          Begin: {
            DefaultNames:[StringNames.Spain]
          },
        })
    );

    this.context.set(StringComponentNames.Repeat,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Make a new string by copying the original string number of times.",
          Code:{
            Call:StringVariables.Object + '.repeat(2);',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.Replace,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.",
          Code:{
            Call:StringVariables.Object + '.replace("World", "Tom");',
            TypeResults: StringTypeResults.ResultString,
          },
          TablesCode:'replace(regexp, newSubstr)  replace(substr, newSubstr)  replace(substr, replacerFunction)',
          MethodTable:{
            Parameter :['regexp','substr','newSubstr (replacement)', 'replacerFunction (replacement)'],
            Description:[
              'A RegExp object or literal.',
              'A String that is to be replaced by newSubstr.',
              'The String that replaces the substring specified by the specified regexp or substr parameter.',
              'A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.'
            ] },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.Search,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The search() method executes a search for a match between a regular expression and this String object. Return the index position of the search string.",
          Code:{
            Call:StringVariables.Object + '.search("World");',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        }
      ));

    this.context.set(StringComponentNames.Slice,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
          Code:{
            Call:StringVariables.Object + '.slice(0, 5);',
            TypeResults: StringTypeResults.ResultString,
          },
          TablesCode:'string.slice(start, end)',
          MethodTable:{
            Parameter :['start','end'],
            Description:[
              'Required. The position where to begin the extraction. First character is at position 0',
              'Optional. The position (up to, but not including) where to end the extraction. If omitted,slice() selects all characters from the start-position to the end of the string'

            ] },
           Begin: {
            DefaultNames:[StringNames.HelloWorld],
        }
      })
    );

    this.context.set(StringComponentNames.Split,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.",
          Code:{
            Call:StringVariables.Object + '.split(" ");',
            TypeResults: StringTypeResults.ResultArray,
          },
          TablesCode:'string.split(separator, limit)',
          MethodTable:{
            Parameter :['separator','limit'],
            Description:[
              'Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)',
              'Optional. An integer that specifies the number of splits, items after the split limit will not'

            ] },
          Begin: {
            DefaultNames:[StringNames.Spain]
          },
        })
    );

    this.context.set(StringComponentNames.StartsWith,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
          Code:{
            Call:StringVariables.Object + '.startsWith("The");',
            TypeResults: StringTypeResults.ResultBoolean,
          },
          TablesCode:'string.startsWith(searchvalue, start)',
          MethodTable:{
            Parameter :['searchvalue','start'],
            Description:[
              'Required. The string to search for',
              'Optional. Default 0. At which position to start the search'

            ] },
          Begin: {
            DefaultNames:[StringNames.Spain]
          },
        })
    );

    this.context.set(StringComponentNames.Substr,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.",
          Code:{
            Call:StringVariables.Object + '.substr(1, 4);',
            TypeResults: StringTypeResults.ResultString,
          },
          TablesCode:'string.substr(start, length);',
          MethodTable:{
            Parameter :['start','length'],
            Description:[
              'Required. The position where to start the extraction. First character is at index 0. If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string. If start is negative, substr() uses it as a character index from the end of the string If start is negative or larger than the length of the string, start is set to 0',
              'Optional. The number of characters to extract. If omitted, it extracts the rest of the string'
            ] },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.SubString,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.",
          Code:{
            Call:StringVariables.Object + '.substring(1, 4);',
            TypeResults: StringTypeResults.ResultString,
          },
          TablesCode:'string.substring(start, end)',
          MethodTable:{
            Parameter :['start','end'],
            Description:[
              'Required. The position where to start the extraction. First character is at index 0.',
              'Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string'

            ] },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.ToLowerCase,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Convert the string to lowercase letters.",
          Code:{
            Call:StringVariables.Object + '.toLowerCase();',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.ToString,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Return the value of a string.",
          Code:{
            Call:StringVariables.Object + '.toString();',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.ToUpperCase,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Convert the string to uppercase letters.",
          Code:{
            Call:StringVariables.Object + '.toUpperCase();',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorld]
          },
        })
    );

    this.context.set(StringComponentNames.Trim,
      new ContextString( {
          ComponentType: ContextComponentType.String,
          CodeDescription:"Remove whitespace from both sides of a string.",
          Code:{
            Call:StringVariables.Object + '.trim();',
            TypeResults: StringTypeResults.ResultString,
          },
          Begin: {
            DefaultNames:[StringNames.HelloWorldSpace]
          },
        })
    );

    this.context.set(StringComponentNames.ValueOf,
      new ContextString({
        ComponentType: ContextComponentType.String,
        CodeDescription: "Return the primitive value of a string object.",
        Code: {
          Call: 'typeof '+ StringVariables.Object + '.valueOf();',
          TypeResults: StringTypeResults.ResultString,
        },
        Begin: {
          DefaultNames: [StringNames.HelloWorld],
        }
      })
    );


  }

}
