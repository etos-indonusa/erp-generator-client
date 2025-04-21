import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFlightShareAddComponent } from './location-flight-share-add.component';

describe('LocationFlightShareAddComponent', () => {
  let component: LocationFlightShareAddComponent;
  let fixture: ComponentFixture<LocationFlightShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationFlightShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationFlightShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
