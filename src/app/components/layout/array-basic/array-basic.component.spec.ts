import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from "@angular/forms";

import { ArrayBasicComponent } from './array-basic.component';
import {InitializeArrayComponent} from "../../inner/initialize-array/initialize-array.component";
import {HintComponent} from "../../inner/hint/hint.component";
import {RunComponent} from "../../inner/run/run.component";
import {TypeResultArrayComponent} from "../../inner/type-result-array/type-result-array.component";
import {ShowComponent} from "../../inner/show/show.component";

describe('ArrayBasicComponent', () => {
  let component: ArrayBasicComponent;
  let fixture: ComponentFixture<ArrayBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArrayBasicComponent,
        InitializeArrayComponent,
        ShowComponent,
        RunComponent,
        HintComponent,
        TypeResultArrayComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
