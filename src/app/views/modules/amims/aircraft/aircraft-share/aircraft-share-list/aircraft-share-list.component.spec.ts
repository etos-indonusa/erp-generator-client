import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShareListComponent } from './aircraft-share-list.component';

describe('AircraftShareListComponent', () => {
  let component: AircraftShareListComponent;
  let fixture: ComponentFixture<AircraftShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
