import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStartPageComponent } from './app-start-page.component';

describe('AppStartPageComponent', () => {
  let component: AppStartPageComponent;
  let fixture: ComponentFixture<AppStartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppStartPageComponent]
    });
    fixture = TestBed.createComponent(AppStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
