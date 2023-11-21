import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ArrayBasicComponent } from './components/layout/array-basic/array-basic.component';
import { StringBasicComponent } from './components/layout/string-basic/string-basic.component';
import { RegExprBasicComponent } from './components/layout/reg-expr-basic/reg-expr-basic.component';

import { RegExprClassComponent } from './components/reg-expr-class/reg-expr-class.component';
import { InitializeArrayComponent } from './components/inner/initialize-array/initialize-array.component';
import { RunComponent } from './components/inner/run/run.component';
import { HintComponent } from './components/inner/hint/hint.component';
import { TypeResultArrayComponent } from './components/inner/type-result-array/type-result-array.component';
import { InitializeComponent } from './components/inner/initialize/initialize.component';
import { TypeResultStringComponent } from './components/inner/type-result-string/type-result-string.component';
import { TypeResultRegExprComponent } from './components/inner/type-result-reg-expr/type-result-reg-expr.component';
import { ShowComponent } from './components/inner/show/show.component';



let appRoutes: Routes = [
  { path: '', component: WelcomeComponent },

  /**************\
  *    Array    *
  \**************/
  //Method Call
  { path: 'Array/Concatenate', component: ArrayBasicComponent },
  { path: 'Array/Copy_Within', component: ArrayBasicComponent },
  { path: 'Array/Fill', component: ArrayBasicComponent },
  { path: 'Array/Includes', component: ArrayBasicComponent },
  { path: 'Array/Index_Of', component: ArrayBasicComponent },
  { path: 'Array/IsArray', component: ArrayBasicComponent },
  { path: 'Array/Join', component: ArrayBasicComponent },
  { path: 'Array/Last_Index_Of', component: ArrayBasicComponent },
  { path: 'Array/Reverse', component: ArrayBasicComponent },
  { path: 'Array/Slice', component: ArrayBasicComponent },
  { path: 'Array/Splice', component: ArrayBasicComponent },
  { path: 'Array/To_String', component: ArrayBasicComponent },
  { path: 'Array/Value_Of', component: ArrayBasicComponent },
  //Data Structures
  { path: 'Array/Entries', component: ArrayBasicComponent },
  { path: 'Array/For_Each', component: ArrayBasicComponent },
  { path: 'Array/Keys', component: ArrayBasicComponent },
  { path: 'Array/Map', component: ArrayBasicComponent },
  { path: 'Array/Pop', component: ArrayBasicComponent },
  { path: 'Array/Prototype', component: ArrayBasicComponent },
  { path: 'Array/Push', component: ArrayBasicComponent },
  { path: 'Array/Shift', component: ArrayBasicComponent },
  { path: 'Array/Sort', component: ArrayBasicComponent },
  { path: 'Array/Unshift', component: ArrayBasicComponent },
  //Function Calls
  { path: 'Array/Every', component: ArrayBasicComponent },
  { path: 'Array/Filter', component: ArrayBasicComponent },
  { path: 'Array/Find', component: ArrayBasicComponent },
  { path: 'Array/Find_Index', component: ArrayBasicComponent },
  { path: 'Array/From', component: ArrayBasicComponent },
  { path: 'Array/Reduce', component: ArrayBasicComponent },
  { path: 'Array/Reduce_Right', component: ArrayBasicComponent },
  { path: 'Array/Some', component: ArrayBasicComponent },

  /**************\
  *    String    *
  \**************/

  //Method Calls
  { path: 'String/Character_At', component: StringBasicComponent },
  { path: 'String/Character_Code_At', component: StringBasicComponent },
  { path: 'String/Concatenate', component: StringBasicComponent },
  { path: 'String/From_Character_Code', component: StringBasicComponent },
  { path: 'String/Length', component: StringBasicComponent },
  { path: 'String/Repeat', component: StringBasicComponent },
  { path: 'String/Slice', component: StringBasicComponent },
  { path: 'String/Split', component: StringBasicComponent },
  { path: 'String/Substr', component: StringBasicComponent },
  { path: 'String/Sub_String', component: StringBasicComponent },
  { path: 'String/To_Lower_Case', component: StringBasicComponent },
  { path: 'String/To_String', component: StringBasicComponent },
  { path: 'String/To_Upper_Case', component: StringBasicComponent },
  { path: 'String/Trim', component: StringBasicComponent },
  { path: 'String/Value_Of', component: StringBasicComponent },

  //Search Calls
  { path: 'String/Ends_With', component: StringBasicComponent },
  { path: 'String/Includes', component: StringBasicComponent },
  { path: 'String/Index_Of', component: StringBasicComponent },
  { path: 'String/Last_Index_Of', component: StringBasicComponent },
  { path: 'String/Locale_Compare', component: StringBasicComponent },
  { path: 'String/Match', component: StringBasicComponent },
  { path: 'String/Replace', component: StringBasicComponent },
  { path: 'String/Search', component: StringBasicComponent },
  { path: 'String/Starts_With', component: StringBasicComponent },

  /***************************\
  *    Regular Expressions    *
 \****************************/
  //** Objects
  { path: 'RegExpr/Object_Notation', component: RegExprBasicComponent   },
  { path: 'RegExpr/Object_Constructor', component: RegExprBasicComponent   },

  //** RegExpr Class
  { path: 'RegExpr/RegExpr', component: RegExprClassComponent  },

  //** RegExpr Methods
  { path: 'RegExpr/Exec', component: RegExprBasicComponent   },
  { path: 'RegExpr/Test', component: RegExprBasicComponent   },

  //** String Methods
  { path: 'RegExpr/Match', component: RegExprBasicComponent    },
  { path: 'RegExpr/Match_All', component: RegExprBasicComponent    },
  { path: 'RegExpr/Replace', component: RegExprBasicComponent    },
  { path: 'RegExpr/Replace_All', component: RegExprBasicComponent    },
  { path: 'RegExpr/Search', component: RegExprBasicComponent    },
  //** Modifiers
  { path: 'RegExpr/Start_End_Indices', component: RegExprBasicComponent   },
  { path: 'RegExpr/Global', component: RegExprBasicComponent   },
  { path: 'RegExpr/Case_Insensitive', component: RegExprBasicComponent   },
  { path: 'RegExpr/Multi_Line_Search', component: RegExprBasicComponent    },
  { path: 'RegExpr/Match_Newline', component: RegExprBasicComponent    },
  { path: 'RegExpr/Unicode', component: RegExprBasicComponent    },
  { path: 'RegExpr/Sticky', component: RegExprBasicComponent    },
  //** Groups and Ranges
  { path: 'RegExpr/Matches_Either', component: RegExprBasicComponent    },
  { path: 'RegExpr/Matches_Any_One', component: RegExprBasicComponent    },
  { path: 'RegExpr/Negated', component: RegExprBasicComponent    },
  { path: 'RegExpr/Capturing_Group', component: RegExprBasicComponent   },
  //** Meta Characters
  { path: 'RegExpr/Single', component: RegExprBasicComponent    },
  { path: 'RegExpr/Word', component: RegExprBasicComponent    },
  { path: 'RegExpr/Non_Word', component: RegExprBasicComponent    },
  { path: 'RegExpr/Digit', component: RegExprBasicComponent    },
  { path: 'RegExpr/Non_Digit', component: RegExprBasicComponent    },
  { path: 'RegExpr/Whitespace', component: RegExprBasicComponent    },
  { path: 'RegExpr/Non_Whitespace', component: RegExprBasicComponent    },
  { path: 'RegExpr/Beginning_End_Word', component: RegExprBasicComponent    },
  { path: 'RegExpr/Non_Beginning_End_Word', component: RegExprBasicComponent    },
  { path: 'RegExpr/Null', component: RegExprBasicComponent    },
  { path: 'RegExpr/New_Line', component: RegExprBasicComponent    },
  { path: 'RegExpr/Form_Feed', component: RegExprBasicComponent    },
  { path: 'RegExpr/Carriage_Return', component: RegExprBasicComponent     },
  { path: 'RegExpr/Tab', component: RegExprBasicComponent    },
  { path: 'RegExpr/Vertical_Tab', component: RegExprBasicComponent    },
  { path: 'RegExpr/Octal_Number', component: RegExprBasicComponent    },
  { path: 'RegExpr/Hexadecimal_Number', component: RegExprBasicComponent    },
  //** Quantifiers
  { path: 'RegExpr/At_Least_One', component: RegExprBasicComponent    },
  { path: 'RegExpr/Zero_Or_More', component: RegExprBasicComponent    },
  { path: 'RegExpr/Zero_Or_One', component: RegExprBasicComponent    },
  { path: 'RegExpr/Sequence_Of', component: RegExprBasicComponent    },
  { path: 'RegExpr/End', component: RegExprBasicComponent    },
  { path: 'RegExpr/Beginning', component:  RegExprBasicComponent  },
  { path: 'RegExpr/Specific_String', component:  RegExprBasicComponent  },
  { path: 'RegExpr/Non_Specific_String', component:  RegExprBasicComponent  },



];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ArrayBasicComponent,
    StringBasicComponent,
    RegExprBasicComponent,
    RegExprClassComponent,
    InitializeArrayComponent,
    RunComponent,
    HintComponent,
    TypeResultArrayComponent,
    InitializeComponent,
    TypeResultStringComponent,
    TypeResultRegExprComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
