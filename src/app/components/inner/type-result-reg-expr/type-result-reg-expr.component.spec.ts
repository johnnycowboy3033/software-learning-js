import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResultRegExprComponent } from './type-result-reg-expr.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('TypeResultRegExprComponent', () => {
  let component: TypeResultRegExprComponent;
  let fixture: ComponentFixture<TypeResultRegExprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TypeResultRegExprComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeResultRegExprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
