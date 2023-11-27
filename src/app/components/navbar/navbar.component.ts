import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  /*********************************\
   * Bread Crumb/Drop Down Menu     *
  \*********************************/

  showBreadCrumbs:boolean = true;
  buttonLabel:string = "Bread Crumb Menu";

  changeMenu(){
    //Toggle button label between Collapse and Expand
    this.showBreadCrumbs = !this.showBreadCrumbs;

    if(this.showBreadCrumbs){
      this.buttonLabel = "Bread Crumb Menu";
    }else{
      this.buttonLabel = "Dropdown Link";

    }
  };

  /**********************************************************************\
   * Banner Menu - Array, String, and Regular Expression Hype Link
   * Menu - For the Array (Banner Menu) is Method Calls, Data Structures,
   * and Functions Calls
   * Sub Menu - Concatenate, Copy Within, Fill, Include, etc...
   \**********************************************************************/

  main:string= "hidden";// Hype Link to Hide/Show Banner Menu

  mainArray:string = "cos-bead-crumb cos-text-decor-underline";
  mainString:string = "cos-bead-crumb cos-text-decor-underline";
  mainRegExpr:string = "cos-bead-crumb cos-text-decor-underline";

  showBanner(){
    this.mainArray = "cos-bead-crumb cos-text-decor-underline";
    this.mainString = "cos-bead-crumb cos-text-decor-underline";
    this.mainRegExpr =  "cos-bead-crumb cos-text-decor-underline";
  }
  hideBanner(){
    this.mainArray =  "hidden";
    this.mainString =  "hidden";
    this.mainRegExpr =   "hidden";
  }



  /***********************\
   * Menu                *
  \***********************/

  arrayMethodCalls:string = "hidden";
  arrayDataStructures:string = "hidden";
  arrayFunctionCalls:string = "hidden";

  showArray(){
    this.arrayMethodCalls = "cos-bead-crumb";
    this.arrayDataStructures = "cos-bead-crumb cos-text-decor-underline\"";
    this.arrayFunctionCalls = "cos-bead-crumb cos-text-decor-underline\"";
  }

  hideArray(){
    this.arrayMethodCalls = "hidden";
    this.arrayDataStructures = "hidden";
    this.arrayFunctionCalls = "hidden";
  }

  stringMethodCalls:string = "hidden";
  stringSearchCalls:string = "hidden";

  showString(){
    this.stringMethodCalls = "cos-bead-crumb";
    this.stringSearchCalls = "cos-bead-crumb cos-text-decor-underline";
  }

  hideString(){
    this.stringMethodCalls = "hidden";
    this.stringSearchCalls = "hidden";
  }

  regExprObjects:string = "hidden";
  regExprClasses:string = "hidden";
  regExprMethods:string = "hidden";
  regExprStringMethods:string = "hidden";
  regExprModifiers:string = "hidden";
  regExprGroupsAndRanges:string = "hidden";
  regExprMetaCharacters:string = "hidden";
  regExprQuantifiers:string = "hidden";

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

  /************************\
   * Sub Menu              *
  \************************/

  showArrayMethodCalls:boolean = false;
  showArrayDataStructures:boolean = false;
  showArrayFunctionCalls:boolean = false;

  showStringMethodCalls:boolean = false;
  showStringSearchCalls:boolean = false;

  showRegExprObjects:boolean = false;
  showRegExprClasses:boolean = false;
  showRegExprMethods:boolean = false;
  showRegExprStringMethods:boolean = false;
  showRegExprModifiers:boolean = false;
  showRegExprGroupsAndRanges:boolean = false;
  showRegExprMetaCharacters:boolean = false;
  showRegExprQuantifiers:boolean = false;

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

    //Click on the Main Hype Link Show the Array, String, and Regular Expression Hype Link (Banner Menu)
    if(data.Name == "Main"){
      this.showBanner();

      this.hideArray();
      this.hideString();
      this.hideRegExpr();

      this.hideSubMenu();

      this.main = "hidden";

    }

    if( data.Name == "Array"){
      this.hideBanner();
      this.showArray();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    if( data.Name == "String"){
      this.hideBanner();
      this.showString();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    if( data.Name == "RegExpr"){
      this.hideBanner();
      this.showRegExpr();

      this.main = "fs-5 fw-bold cos-bead-crumb";
    }

    //After click on Menu item will show Sub Menus that is associated with the Menu.
    if( data.Name == "Array Method Calls"){this.hideSubMenu(); this.showArray(); this.showArrayMethodCalls = true; this.arrayMethodCalls = "";}
    if( data.Name == "Array Data Structures"){this.hideSubMenu(); this.showArray(); this.showArrayDataStructures = true; this.arrayDataStructures = "";}
    if( data.Name == "Array Function Calls"){this.hideSubMenu(); this.showArray(); this.showArrayFunctionCalls = true; this.arrayFunctionCalls = "";}

    if( data.Name == "String Method Calls"){this.hideSubMenu(); this.showString(); this.showStringMethodCalls = true; this.stringMethodCalls = "";}
    if( data.Name == "String Search Calls"){this.hideSubMenu(); this.showString(); this.showStringSearchCalls = true; this.stringSearchCalls = "";}

    if( data.Name == "RegExpr Method Calls"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprObjects = true; this.regExprObjects = "";}
    if( data.Name == "RegExpr Classes"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprClasses = true; this.regExprClasses = "";}
    if( data.Name == "RegExpr Methods"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprMethods = true; this.regExprMethods = "";}
    if( data.Name == "RegExpr String Methods"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprStringMethods = true; this.regExprStringMethods = "";}
    if( data.Name == "RegExpr Modifiers"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprModifiers = true; this.regExprModifiers = "";}
    if( data.Name == "RegExpr Groups and Ranges"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprGroupsAndRanges = true; this.regExprGroupsAndRanges = "";}
    if( data.Name == "RegExpr Meta Characters"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprMetaCharacters = true; this.regExprMetaCharacters = "";}
    if( data.Name == "RegExpr Quantifiers"){this.hideSubMenu(); this.showRegExpr(); this.showRegExprQuantifiers = true; this.regExprQuantifiers = "";}

  };



}
