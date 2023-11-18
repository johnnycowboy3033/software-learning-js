import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResultArrayComponent } from './type-result-array.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('TypeResultArrayComponent', () => {
  let component: TypeResultArrayComponent;
  let fixture: ComponentFixture<TypeResultArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TypeResultArrayComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeResultArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
