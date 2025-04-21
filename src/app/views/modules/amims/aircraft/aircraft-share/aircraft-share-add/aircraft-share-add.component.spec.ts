import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShareAddComponent } from './aircraft-share-add.component';

describe('AircraftShareAddComponent', () => {
  let component: AircraftShareAddComponent;
  let fixture: ComponentFixture<AircraftShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
