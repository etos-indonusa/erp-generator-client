import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailShareListComponent } from './aircraft-detail-share-list.component';

describe('AircraftDetailShareListComponent', () => {
  let component: AircraftDetailShareListComponent;
  let fixture: ComponentFixture<AircraftDetailShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
