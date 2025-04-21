import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitShareListComponent } from './life-time-limit-share-list.component';

describe('LifeTimeLimitShareListComponent', () => {
  let component: LifeTimeLimitShareListComponent;
  let fixture: ComponentFixture<LifeTimeLimitShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
