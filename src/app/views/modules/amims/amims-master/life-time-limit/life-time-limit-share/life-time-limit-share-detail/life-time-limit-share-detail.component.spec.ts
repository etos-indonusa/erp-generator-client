import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitShareDetailComponent } from './life-time-limit-share-detail.component';

describe('LifeTimeLimitShareDetailComponent', () => {
  let component: LifeTimeLimitShareDetailComponent;
  let fixture: ComponentFixture<LifeTimeLimitShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
