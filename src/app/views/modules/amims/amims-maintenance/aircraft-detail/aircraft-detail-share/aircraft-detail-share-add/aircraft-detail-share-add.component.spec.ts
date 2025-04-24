import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailShareAddComponent } from './aircraft-detail-share-add.component';

describe('AircraftDetailShareAddComponent', () => {
  let component: AircraftDetailShareAddComponent;
  let fixture: ComponentFixture<AircraftDetailShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
