import { TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component';
import { WelcomeComponent } from '../app/components/welcome/welcome.component'
import { NavbarComponent } from "./components/navbar/navbar.component"

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent,
        WelcomeComponent,
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Learning JavaScript'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Learning JavaScript');
  });

  it('Organization Name should Church of Scyence', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#organization-name')?.textContent).toContain('Church of Scyence');
  });

});
