import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFlightShareDetailComponent } from './location-flight-share-detail.component';

describe('LocationFlightShareDetailComponent', () => {
  let component: LocationFlightShareDetailComponent;
  let fixture: ComponentFixture<LocationFlightShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationFlightShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationFlightShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
