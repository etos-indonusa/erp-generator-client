import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorShareDetailComponent } from './rotary-factor-share-detail.component';

describe('RotaryFactorShareDetailComponent', () => {
  let component: RotaryFactorShareDetailComponent;
  let fixture: ComponentFixture<RotaryFactorShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
