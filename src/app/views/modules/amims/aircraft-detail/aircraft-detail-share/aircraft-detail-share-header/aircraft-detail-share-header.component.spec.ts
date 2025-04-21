import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailShareHeaderComponent } from './aircraft-detail-share-header.component';

describe('AircraftDetailShareHeaderComponent', () => {
  let component: AircraftDetailShareHeaderComponent;
  let fixture: ComponentFixture<AircraftDetailShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
