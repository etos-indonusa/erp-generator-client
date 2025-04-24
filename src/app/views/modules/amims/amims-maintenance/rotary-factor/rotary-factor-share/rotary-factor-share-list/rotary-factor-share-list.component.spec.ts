import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryFactorShareListComponent } from './rotary-factor-share-list.component';

describe('RotaryFactorShareListComponent', () => {
  let component: RotaryFactorShareListComponent;
  let fixture: ComponentFixture<RotaryFactorShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaryFactorShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryFactorShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
