import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailListComponent } from './aircraft-detail-list.component';

describe('AircraftDetailListComponent', () => {
  let component: AircraftDetailListComponent;
  let fixture: ComponentFixture<AircraftDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
