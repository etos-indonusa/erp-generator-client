import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFlightListComponent } from './location-flight-list.component';

describe('LocationFlightListComponent', () => {
  let component: LocationFlightListComponent;
  let fixture: ComponentFixture<LocationFlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationFlightListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationFlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
