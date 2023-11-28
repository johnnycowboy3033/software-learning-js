import { Injectable } from '@angular/core';
import {MainService} from "../main.service";

import {ContextArray} from "../../classes/array/context-array";
import {ContextComponentType} from "../../enumerates/context/context-component-type";

import {ArrayNames} from "../../enumerates/array/array-names";
import {ArrayComponentNames} from "../../enumerates/array/array-component-names";
import {ArrayVariables} from "../../enumerates/array/array-variables";
import {ArrayTypeResults} from "../../enumerates/array/array-type-results";
import {MethodTypesTypes} from "../../enumerates/array/array-method-types";

@Injectable({
  providedIn: 'root'
})
export class ArrayService extends MainService{

  /***************************************************************\
   * TABLES
   *
   * Description:
   * The below arrays are used to populate the Initialize Component.
   **************************************************************/


  /*
  Contains of the tables. The items in this array should not change. They are used
  on the Initialize Component.
  */

  //Tables Map Values
  OrderInteger:string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  Fruits:string[] = ["Banana", "Orange",'Melon', "Apple", "Mango", "Berries", "Watermelon"];
  UniqueInteger:string[] = ["3","8","13","11","4","6","2","1"];
  Peoples:string[] = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];

  constructor() {
      super();

      this.arraysMap.set(ArrayNames.OrderInteger, this.OrderInteger);
      this.arraysMap.set(ArrayNames.Fruits, this.Fruits);
      this.arraysMap.set(ArrayNames.UniqueInteger, this.UniqueInteger);
      this.arraysMap.set(ArrayNames.Peoples, this.Peoples);

    this.context.set('/',
      new ContextArray({ComponentType : ContextComponentType.Array}
      ));

    this.context.set(ArrayComponentNames.Concatenate,
        new ContextArray( {
          ComponentType : ContextComponentType.Array,
          Begin:{DefaultNames: [ArrayNames.Fruits,ArrayNames.Peoples]},
          CodeDescription:"Join several arrays into one.",
          Code:{
            Call:ArrayVariables.Object + '.concat( '+ ArrayVariables.ParameterFirst + ' );',
            TypeResults: ArrayTypeResults.ResultArray,
          }
        }
      ));

    this.context.set(ArrayComponentNames.CopyWithin,
      new ContextArray({
        ComponentType : ContextComponentType.Array,
        Begin:{ DefaultNames:[ArrayNames.OrderInteger] },
          ShouldCompare: true,
          CodeDescription:"Copies array elements to another position in an array, overwriting the existing values.",
          TablesCode:'array.copyWithin(target, start, end)',
          MethodTable:{
            Parameter :['target','start','end'],
            Description:[
              'Required. The index position to copy the elements to',
              'Optional. The index position to start copying elements from-array (default is 0)',
              'Optional. The index position to stop copying elements from-array (default is array.length-string)'
            ] },
          Code:{
            Call: ArrayVariables.Object+'.copyWithin( 5, 0, 2);',
            TypeResults: ArrayTypeResults.ChangeArray,
          },

        }
      ));


    this.context.set(ArrayComponentNames.Entries,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Array Iterator object that contains the key/value pairs for each index in the array.",
          Code:{
            Type:MethodTypesTypes.FOR,
            Method:'const [index, element] of  '+ ArrayVariables.Object + '.entries()',
            Logic:'empty.push( index + " : " + element);' ,
            TypeResults: ArrayTypeResults.EmptyArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Every,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin: {DefaultNames: [ArrayNames.Fruits]},
          CodeDescription:"The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
          Code:{
            Call:ArrayVariables.Object + '.every(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(name)',
            MethodParentheses:false,
            Logic:'return name.length > 9;' ,
            TypeResults: ArrayTypeResults.ResultBoolean,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Fill,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Fill all the array elements with a static value.",
          Code:{
            Call:ArrayVariables.Object+'.fill("Kiwi");',
            TypeResults: ArrayTypeResults.ChangeArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Filter,
      new ContextArray({
        ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
          Code:{
            Call:ArrayVariables.Object+'.filter(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(name)',
            MethodParentheses:false,
            Logic:'return name.length > 9;' ,
            TypeResults: ArrayTypeResults.ResultArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Find,
      new ContextArray({
        ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Get the value of the first element in the array that meets the criteria.",
          Code:{
            Call:ArrayVariables.Object+'.find(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(name)',
            MethodParentheses:false,
            Logic:'return name.length > 9;' ,
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));

    this.context.set(ArrayComponentNames.FindIndex,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Get the index of the first element in the array that has a value of the criteria.",
          Code:{
            Call:ArrayVariables.Object+'.findIndex(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(name)',
            MethodParentheses:false,
            Logic:'return name.length > 9;' ,
            TypeResults: ArrayTypeResults.ResultNumber,
          },
        }
      ));

    this.context.set(ArrayComponentNames.ForEach,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ ArrayNames.Fruits] },
          CodeDescription:"List each item in the array.",
          Code:{
            Call:ArrayVariables.Object+'.forEach(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(item,index)',
            MethodParentheses:false,
            Logic:'empty.push( index + " : " + item );' ,
            TypeResults: ArrayTypeResults.EmptyArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.From,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Peoples] },
          CodeDescription:"Create an Array from-array another array. Pass in function to change initial array.",
          TablesCode:'Array.from(object, mapFunction, thisValue)',
          MethodTable:{
            Parameter :['object','mapFunction','thisValue'],
            Description:[
              'Required. The object to convert to an array',
              'Optional. A map-array function to call on each item of the array',
              'Optional. A value to use as this when executing the mapFunction'
            ] },
          Code:{
            Call:'Array.from( ' + ArrayVariables.Object + ', appendName.do, {lastName:"Smith"});',
            Type:MethodTypesTypes.VAR,
            Method:'appendName =',
            MethodParentheses: false,
            Logic:'do(firstName) { return firstName + " " + this.lastName; }' ,
            TypeResults: ArrayTypeResults.ResultArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Includes,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Check if an array includes-array-string certain value. Return boolean.",
          Code:{
            Call:ArrayVariables.Object+'.includes("Mango");',
            TypeResults: ArrayTypeResults.ResultBoolean,
          },

        }
      ));

    this.context.set(ArrayComponentNames.IndexOf,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
          Code:{
            Call:ArrayVariables.Object+'.indexOf("Mango");',
            TypeResults: ArrayTypeResults.ResultNumber,
          },
        }
      ));

    this.context.set(ArrayComponentNames.IsArray,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Check if an array includes-array-string certain value. Return boolean.",
          Code:{
            Call:'Array.isArray('+ArrayVariables.Object+');',
            TypeResults: ArrayTypeResults.ResultBoolean,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Join,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Convert the elements of an array into a string.",
          Code:{
            Call:ArrayVariables.Object+'.join();',
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Keys,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Create an Array Iterator object, containing the keys-array of the array.",
          Code:{
            Type:MethodTypesTypes.FOR,
            Method:'let x of '+ArrayVariables.Object+'.keys()',
            Logic:'empty.push(x);' ,
            TypeResults: ArrayTypeResults.EmptyArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.LastIndexOf,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Search an array for the item. If there are many times certain item is in the array will return last index.",
          Code:{
            Call:ArrayVariables.Object+'.lastIndexOf("Apple");',
            TypeResults: ArrayTypeResults.ResultNumber,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Map,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          CodeDescription:"The Map object holds key-value pairs and remembers the original insertion order of the keys-array.",
          TablesCode:'array.map(function(currentValue, index, arr), thisValue)',
          MethodTable:{
            Parameter :['function(currentValue, index, arr)','thisValue',' '],
            Description:[
              'Required. A function to be run for each element in the array.',
              'Optional. A value to be passed to the function to be used as its "this" value.',
              'If this parameter is empty, the value "undefined" will be passed as its "this" value'
            ] },
          ArgumentTable:{
            Argument :['currentValue','index','arr'],
            Description:[
              'Required. The value of the current element',
              'Optional. The array index of the current element',
              'Optional. The array object the current element belongs to'
            ] },
          Code:{
            Call:ArrayVariables.Object+'.map(addLastName, {lastName: "Smith"});',
            Type:MethodTypesTypes.FUNC,
            Method:'addLastName (currentValue, index, arr)',
            MethodParentheses: false,
            Logic:'empty.push(currentValue + " " + this.lastName);' ,
            TypeResults: ArrayTypeResults.EmptyArray,
          },
          Begin:{ DefaultNames:[ArrayNames.Peoples] },

        }
      ));

    this.context.set(ArrayComponentNames.Pop,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Remove the last element of an array.",
          Code:{
            Call:ArrayVariables.Object+'.pop();',
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Prototype,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Remove the last element of an array.",
          Code:{
            Call:ArrayVariables.Object+'.ucase();',
            Type:MethodTypesTypes.EMPTY,
            Method:'Array.prototype.ucase = function() ',
            MethodParentheses:false,
            Logic:'for (let i = 0; i < this.length; i++) { this[i] = this[i].toUpperCase(); }',
            TypeResults: ArrayTypeResults.ChangeArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Push,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Add a new item to an array.",
          Code:{
            Call:ArrayVariables.Object+'.push("Kiwi");',
            TypeResults: ArrayTypeResults.ChangeArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Reduce,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from-array the calculation on the preceding element.",
          TablesCode:'array.reduce(function(total, currentValue, currentIndex, arr), initialValue)',
          MethodTable:{
            Parameter: ['function(total,currentValue, index,arr)','initialValue'],
            Description: [
              'Required. A function to be run for each element in the array.',
              'Optional. A value to be passed to the function as the initial value.'
            ]},
          ArgumentTable:{
            Argument:['total','currentValue','currentIndex','arr'],
            Description:[
              'Required. The initialValue, or the previously returned value of the function.',
              'Required. The value of the current element.',
              'Optional. The array index of the current element.',
              'Optional. The array object the current element belongs to'
            ]},
          Code:{
            Call:ArrayVariables.Object+'.reduce(ucase,0);',
            Type:MethodTypesTypes.FUNC,
            Method:'ucase (total,currentValue, index,arr)',
            MethodParentheses:false,
            Logic:'empty.push( index + " : " + currentValue) ;',
            TypeResults: ArrayTypeResults.EmptyArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.ReduceRight,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The reduceRight() method applies a function against an accumulator and each value of the array (from-array right-to-left) to reduce-array it to a single value.",
          TablesCode:'array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)',
          MethodTable:{
            Parameter: ['function(total,currentValue, index,arr)','initialValue'],
            Description: [
              'Required. A function to be run for each element in the array.',
              'Optional. A value to be passed to the function as the initial value.'
            ]},
          ArgumentTable:{
            Argument:['total','currentValue','currentIndex','arr'],
            Description:[
              'Required. The initialValue, or the previously returned value of the function.',
              'Required. The value of the current element.',
              'Optional. The array index of the current element.',
              'Optional. The array object the current element belongs to'
            ]},
          Code:{
            Call:ArrayVariables.Object+'.reduceRight(ucase,0);',
            Type:MethodTypesTypes.FUNC,
            Method:'ucase (total,currentValue, index,arr)',
            MethodParentheses:false,
            Logic:' empty.push( index + " : " + currentValue) ;',
            TypeResults: ArrayTypeResults.EmptyArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Reverse,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits]},
          CodeDescription:"Reverse the order of the elements in an array.",
          Code:{
            Call:ArrayVariables.Object+'.reverse();',
            TypeResults: ArrayTypeResults.ResultArray,

          },
        }
      ));

    this.context.set(ArrayComponentNames.Shift,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Remove the first item of an array.",
          Code:{
            Call:ArrayVariables.Object+'.shift();',
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Slice,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from-array start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
          TablesCode:'array.slice(startIndex, endIndex)',
          MethodTable:{
            Parameter: ['startIndex', 'endIndex'],
            Description: [
              'Starting index where the slice-array-string starts in the array.',
              'Ending index where the slice-array-string ends in the array.'
            ]},
          Code:{
            Call:ArrayVariables.Object+'.slice(1,3);',
            TypeResults: ArrayTypeResults.ResultArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Some,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
          Code:{
            Call:ArrayVariables.Object+'.some(checkNames);',
            Type:MethodTypesTypes.FUNC,
            Method:'checkNames(name)',
            MethodParentheses:false,
            Logic:'return name.length> 9;',
            TypeResults: ArrayTypeResults.ResultBoolean,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Sort,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.UniqueInteger] },
          CodeDescription:"The sort() method sorts the elements of an array.",
          Code:{
            Call:ArrayVariables.Object+'.sort(ascending);',
            Type:MethodTypesTypes.FUNC,
            Method:'ascending (a, b) ',
            MethodParentheses:false,
            Logic:'return a-b;',
            TypeResults: ArrayTypeResults.ChangeArray,

          },
        }
      ));

    this.context.set(ArrayComponentNames.Splice,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
          TablesCode:'array.splice(index, howmany, item1, ....., itemX)',
          MethodTable:{
            Parameter: ['index', 'endIndex', 'item1, ..., itemX'],
            Description: [
              'Required. The position to add/remove items. Negative values a the position from-array the end of the array.',
              'Optional. Number of items to be removed.',
              'Optional. New elements(s) to be added.'
            ]},
          Code:{
            Call:ArrayVariables.Object+'.splice(2, 0, "Lemon", "Kiwi");',
            TypeResults: ArrayTypeResults.ChangeArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.ToString,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"Convert an array to a string.",
          Code:{
            Call:ArrayVariables.Object+'.toString();',
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));

    this.context.set(ArrayComponentNames.Unshift,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ ArrayNames.Fruits] },
          CodeDescription:"The unshift() method adds one or more elements to the beginning of an array and returns the new length-string of the array.",
          Code:{
            Call:ArrayVariables.Object+'.unshift("Lemon","Pineapple");',
            TypeResults: ArrayTypeResults.ChangeArray,
          },
        }
      ));

    this.context.set(ArrayComponentNames.ValueOf,
      new ContextArray({
          ComponentType : ContextComponentType.Array,
          ShouldCompare: true,
          Begin:{ DefaultNames:[ArrayNames.Fruits] },
          CodeDescription:"The valueOf() method returns the primitive value of the specified object.",
          Code:{
            Call:ArrayVariables.Object+'.valueOf();',
            TypeResults: ArrayTypeResults.ResultString,
          },
        }
      ));


  }

  /***************\
   *   METHODS    *
  \***************/
  /*
  This method take in array of arraysMap Keys and returns array of the Values in the arraysMap
   */

  getArrayFromDefaultNames(defaultNames: string[]){

    let resultArray =[];

    for (const [index, element] of defaultNames.entries()){
      resultArray.push( this.arraysMap.get(element) ) ;
    }

    return resultArray;
  }


}
