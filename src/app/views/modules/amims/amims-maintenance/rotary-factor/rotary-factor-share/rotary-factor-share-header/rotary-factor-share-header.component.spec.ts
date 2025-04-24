import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorShareHeaderComponent } from './rotary-factor-share-header.component';

describe('RotaryFactorShareHeaderComponent', () => {
  let component: RotaryFactorShareHeaderComponent;
  let fixture: ComponentFixture<RotaryFactorShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
