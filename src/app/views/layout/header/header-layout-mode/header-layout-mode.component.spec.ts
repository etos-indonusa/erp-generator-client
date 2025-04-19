import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayoutModeComponent } from './header-layout-mode.component';

describe('HeaderLayoutModeComponent', () => {
  let component: HeaderLayoutModeComponent;
  let fixture: ComponentFixture<HeaderLayoutModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLayoutModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLayoutModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
