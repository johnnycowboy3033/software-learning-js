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

  home:string= "fs-5 fw-bold cos-bead-crumb";

  mainArray:string = "cos-bead-crumb";
  mainString:string = "cos-bead-crumb";
  mainRegExpr:string = "cos-bead-crumb";

  showMain(){
    this.mainArray = "cos-bead-crumb";
    this.mainString = "cos-bead-crumb";
    this.mainRegExpr =  "cos-bead-crumb";
  }
  hideMain(){
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
  arrayFunctionCalls:string = "hidden";

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



  ListMenu(data:any){

    if(data.Name == "Home"){
      this.showMain();
      this.hideArray();

      this.showArrayMethodCalls = false;
    }

    if( data.Name == "Array"){
      this.hideMain();
      this.showArray();
    }

    if( data.Name == "Array Method Calls"){
      this.hideTablesMenus();
      this.showArrayMethodCalls = true;
    }

  };



}
