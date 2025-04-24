import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeLimitListComponent } from './life-time-limit-list.component';

describe('LifeTimeLimitListComponent', () => {
  let component: LifeTimeLimitListComponent;
  let fixture: ComponentFixture<LifeTimeLimitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeTimeLimitListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeLimitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
