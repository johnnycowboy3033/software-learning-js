import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";

import { InitializeArrayComponent } from './initialize-array.component';
import {ArrayService} from "../../../services/array/array.service";

describe('InitializeArrayComponent', () => {
  let component: InitializeArrayComponent;
  let fixture: ComponentFixture<InitializeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializeArrayComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        ArrayService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitializeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
