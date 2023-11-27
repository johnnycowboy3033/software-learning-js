import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showBreadCrumbs:boolean = true;
  buttonLabel:string = "Collapse";

  changeMenu(){
    //Toggle button label between Collapse and Expand
    this.showBreadCrumbs = !this.showBreadCrumbs;

    if(this.showBreadCrumbs){
      this.buttonLabel = "Collapse";
    }else{
      this.buttonLabel = "Expand";

    }
  };

  main:string= "hidden";

  mainArray:string = "cos-bead-crumb cos-text-decor-underline";
  mainString:string = "cos-bead-crumb cos-text-decor-underline";
  mainRegExpr:string = "cos-bead-crumb cos-text-decor-underline";

  showMenu(){
    this.mainArray = "cos-bead-crumb cos-text-decor-underline";
    this.mainString = "cos-bead-crumb cos-text-decor-underline";
    this.mainRegExpr =  "cos-bead-crumb cos-text-decor-underline";
  }
  hideMenu(){
    this.mainArray =  "hidden";
    this.mainString =  "hidden";
    this.mainRegExpr =   "hidden";
  }

  hideTablesMenus(){
    this.showArrayMethodCalls = false;

  }

  arrayMethodCalls:string = "hidden";
  showArrayMethodCalls:boolean = false;
  arrayDataStructures:string = "hidden";
  showArrayDataStructures:boolean = false;
  arrayFunctionCalls:string = "hidden";
  showArrayFunctionCalls:boolean = false;

  showArray(){
    this.arrayMethodCalls = "cos-bead-crumb";
    this.arrayDataStructures = "cos-bead-crumb";
    this.arrayFunctionCalls = "cos-bead-crumb";
  }

  hideArray(){
    this.arrayMethodCalls = "hidden";
    this.arrayDataStructures = "hidden";
    this.arrayFunctionCalls = "hidden";
  }

  stringMethodCalls:string = "hidden";
  showStringMethodCalls:boolean = false;
  stringSearchCalls:string = "hidden";
  showStringSearchCalls:boolean = false;

  showString(){
    this.stringMethodCalls = "cos-bead-crumb";
    this.stringSearchCalls = "cos-bead-crumb";
  }

  hideString(){
    this.stringMethodCalls = "hidden";
    this.stringSearchCalls = "hidden";
  }


  regExprObjects:string = "hidden";
  showRegExprObjects:boolean = false;
  regExprClasses:string = "hidden";
  showRegExprClasses:boolean = false;
  regExprMethods:string = "hidden";
  showRegExprMethods:boolean = false;
  regExprStringMethods:string = "hidden";
  showRegExprStringMethods:boolean = false;
  regExprModifiers:string = "hidden";
  showRegExprModifiers:boolean = false;
  regExprGroupsAndRanges:string = "hidden";
  showRegExprGroupsAndRanges:boolean = false;
  regExprMetaCharacters:string = "hidden";
  showRegExprMetaCharacters:boolean = false;
  regExprQuantifiers:string = "hidden";
  showRegExprQuantifiers:boolean = false;

  showRegExpr(){
    this.regExprObjects = "cos-bead-crumb";
    this.regExprClasses = "cos-bead-crumb cos-text-decor-underline";
    this.regExprMethods = "cos-bead-crumb cos-text-decor-underline";
    this.regExprStringMethods = "cos-bead-crumb cos-text-decor-underline";
    this.regExprModifiers = "cos-bead-crumb cos-text-decor-underline";
    this.regExprGroupsAndRanges = "cos-bead-crumb cos-text-decor-underline";
    this.regExprMetaCharacters = "cos-bead-crumb cos-text-decor-underline";
    this.regExprQuantifiers = "cos-bead-crumb cos-text-decor-underline";
  }

  hideRegExpr(){
    this.regExprObjects  = "hidden";
    this.regExprClasses  = "hidden";
    this.regExprMethods  = "hidden";
    this.regExprStringMethods  = "hidden";
    this.regExprModifiers  = "hidden";
    this.regExprGroupsAndRanges  = "hidden";
    this.regExprMetaCharacters  = "hidden";
    this.regExprQuantifiers  = "hidden";
  }

  hideSubMenu(){
    this.showArrayMethodCalls = false;
    this.showArrayDataStructures = false;
    this.showArrayFunctionCalls = false;

    this.showStringMethodCalls = false;
    this.showStringSearchCalls = false;

    this.showRegExprObjects = false;
    this.showRegExprClasses = false;
    this.showRegExprMethods = false;
    this.showRegExprStringMethods = false;
    this.showRegExprModifiers = false;
    this.showRegExprGroupsAndRanges = false;
    this.showRegExprMetaCharacters = false;
    this.showRegExprQuantifiers = false;
  }

  ListMenu(data:any){

    this.hideTablesMenus();

    if(data.Name == "Main"){
      this.showMenu();
      this.hideArray();
      this.hideString();
      this.hideRegExpr();

      this.hideSubMenu();

      this.main = "hidden";

    }

    if( data.Name == "Array"){
      this.hideMenu();
      this.showArray();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    if( data.Name == "String"){
      this.hideMenu();
      this.showString();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    if( data.Name == "RegExpr"){
      this.hideMenu();
      this.showRegExpr();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    if( data.Name == "Array Method Calls"){this.hideSubMenu(); this.showArrayMethodCalls = true;}
    if( data.Name == "Array Data Structures"){this.hideSubMenu(); this.showArrayDataStructures = true;}
    if( data.Name == "Array Function Calls"){this.hideSubMenu(); this.showArrayFunctionCalls = true;}

    if( data.Name == "String Method Calls"){this.hideSubMenu(); this.showStringMethodCalls = true;}
    if( data.Name == "String Search Calls"){this.hideSubMenu(); this.showStringSearchCalls = true;}

    if( data.Name == "RegExpr Method Calls"){this.hideSubMenu(); this.showRegExprObjects = true;}
    if( data.Name == "RegExpr Classes"){this.hideSubMenu(); this.showRegExprClasses = true;}
    if( data.Name == "RegExpr Methods"){this.hideSubMenu(); this.showRegExprMethods = true;}
    if( data.Name == "RegExpr String Methods"){this.hideSubMenu(); this.showRegExprStringMethods = true;}
    if( data.Name == "RegExpr Modifiers"){this.hideSubMenu(); this.showRegExprModifiers = true;}
    if( data.Name == "RegExpr Groups and Ranges"){this.hideSubMenu(); this.showRegExprGroupsAndRanges = true;}
    if( data.Name == "RegExpr Meta Characters"){this.hideSubMenu(); this.showRegExprMetaCharacters = true;}
    if( data.Name == "RegExpr Quantifiers"){this.hideSubMenu(); this.showRegExprQuantifiers = true;}

  };



}
