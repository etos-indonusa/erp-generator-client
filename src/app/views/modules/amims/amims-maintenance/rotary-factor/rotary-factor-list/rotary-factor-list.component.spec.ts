import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorListComponent } from './rotary-factor-list.component';

describe('RotaryFactorListComponent', () => {
  let component: RotaryFactorListComponent;
  let fixture: ComponentFixture<RotaryFactorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
