import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailShareDetailComponent } from './aircraft-detail-share-detail.component';

describe('AircraftDetailShareDetailComponent', () => {
  let component: AircraftDetailShareDetailComponent;
  let fixture: ComponentFixture<AircraftDetailShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
