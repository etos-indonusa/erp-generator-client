import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMailComponent } from './header-mail.component';

describe('HeaderMailComponent', () => {
  let component: HeaderMailComponent;
  let fixture: ComponentFixture<HeaderMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
