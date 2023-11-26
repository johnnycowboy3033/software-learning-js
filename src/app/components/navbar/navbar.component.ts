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

  home:string= "fs-5 fw-bold beadCrumb";

  mainArray:string = "beadCrumb";
  mainString:string = "beadCrumb";
  mainRegExpr:string = "beadCrumb";

  showMain(){
    this.mainArray = "beadCrumb";
    this.mainString = "beadCrumb";
    this.mainRegExpr =  "beadCrumb";
  }
  hideMain(){
    this.mainArray =  "hidden";
    this.mainString =  "hidden";
    this.mainRegExpr =   "hidden";
  }

  arrayMethodCalls:string = "hidden";
  showArrayMethodCalls:boolean = false;
  arrayDataStructures:string = "hidden";
  arrayFunctionCalls:string = "hidden";

  showArray(){
    this.arrayMethodCalls = "beadCrumb";
    this.arrayDataStructures = "beadCrumb";
    this.arrayFunctionCalls = "beadCrumb";
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
      this.showArrayMethodCalls = true;
    }

  };



}
