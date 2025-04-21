import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorShareWidgetComponent } from './rotary-factor-share-widget.component';

describe('RotaryFactorShareWidgetComponent', () => {
  let component: RotaryFactorShareWidgetComponent;
  let fixture: ComponentFixture<RotaryFactorShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
