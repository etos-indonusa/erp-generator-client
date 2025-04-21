import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitShareAddComponent } from './life-time-limit-share-add.component';

describe('LifeTimeLimitShareAddComponent', () => {
  let component: LifeTimeLimitShareAddComponent;
  let fixture: ComponentFixture<LifeTimeLimitShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
