import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunComponent } from './run.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TypeResultArrayComponent} from "../type-result-array/type-result-array.component";

describe('RunComponent', () => {
  let component: RunComponent;
  let fixture: ComponentFixture<RunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RunComponent,
        TypeResultArrayComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
