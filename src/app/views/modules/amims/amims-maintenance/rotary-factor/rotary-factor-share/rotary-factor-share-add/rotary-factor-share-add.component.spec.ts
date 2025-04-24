import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorShareAddComponent } from './rotary-factor-share-add.component';

describe('RotaryFactorShareAddComponent', () => {
  let component: RotaryFactorShareAddComponent;
  let fixture: ComponentFixture<RotaryFactorShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
