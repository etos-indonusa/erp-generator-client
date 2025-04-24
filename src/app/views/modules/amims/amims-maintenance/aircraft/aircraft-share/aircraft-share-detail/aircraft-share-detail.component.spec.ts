import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShareDetailComponent } from './aircraft-share-detail.component';

describe('AircraftShareDetailComponent', () => {
  let component: AircraftShareDetailComponent;
  let fixture: ComponentFixture<AircraftShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
