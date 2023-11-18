import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResultStringComponent } from './type-result-string.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('TypeResultStringComponent', () => {
  let component: TypeResultStringComponent;
  let fixture: ComponentFixture<TypeResultStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TypeResultStringComponent
      ], imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeResultStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
