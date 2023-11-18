import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegExprClassComponent } from './reg-expr-class.component';

describe('RegExprClassComponent', () => {
  let component: RegExprClassComponent;
  let fixture: ComponentFixture<RegExprClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegExprClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegExprClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
