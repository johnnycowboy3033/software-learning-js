import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from "@angular/forms";

import { StringBasicComponent } from './string-basic.component';
import {InitializeComponent} from "../../inner/initialize/initialize.component";
import {RunComponent} from "../../inner/run/run.component";
import {HintComponent} from "../../inner/hint/hint.component";
import {ShowComponent} from "../../inner/show/show.component";


describe('StringBasicComponent', () => {
  let component: StringBasicComponent;
  let fixture: ComponentFixture<StringBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StringBasicComponent,
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

    fixture = TestBed.createComponent(StringBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
