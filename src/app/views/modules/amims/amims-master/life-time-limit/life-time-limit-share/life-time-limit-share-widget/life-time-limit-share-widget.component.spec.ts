import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitShareWidgetComponent } from './life-time-limit-share-widget.component';

describe('LifeTimeLimitShareWidgetComponent', () => {
  let component: LifeTimeLimitShareWidgetComponent;
  let fixture: ComponentFixture<LifeTimeLimitShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
