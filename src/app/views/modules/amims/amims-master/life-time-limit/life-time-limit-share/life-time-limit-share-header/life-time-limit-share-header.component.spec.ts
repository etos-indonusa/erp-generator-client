import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitShareHeaderComponent } from './life-time-limit-share-header.component';

describe('LifeTimeLimitShareHeaderComponent', () => {
  let component: LifeTimeLimitShareHeaderComponent;
  let fixture: ComponentFixture<LifeTimeLimitShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
