import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShareHeaderComponent } from './aircraft-share-header.component';

describe('AircraftShareHeaderComponent', () => {
  let component: AircraftShareHeaderComponent;
  let fixture: ComponentFixture<AircraftShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
