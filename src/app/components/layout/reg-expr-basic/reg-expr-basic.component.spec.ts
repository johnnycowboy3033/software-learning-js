import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RegExprBasicComponent } from './reg-expr-basic.component';
import {InitializeComponent} from "../../inner/initialize/initialize.component";
import {HintComponent} from "../../inner/hint/hint.component";
import {RunComponent} from "../../inner/run/run.component";
import {ShowComponent} from "../../inner/show/show.component";


describe('RegExprBasicComponent', () => {
  let component: RegExprBasicComponent;
  let fixture: ComponentFixture<RegExprBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegExprBasicComponent,
        InitializeComponent,
        ShowComponent,
        HintComponent,
        RunComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]


    })
    .compileComponents();

    fixture = TestBed.createComponent(RegExprBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
