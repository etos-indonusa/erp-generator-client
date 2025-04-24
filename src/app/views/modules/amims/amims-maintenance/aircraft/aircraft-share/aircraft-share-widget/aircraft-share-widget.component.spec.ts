import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftShareWidgetComponent } from './aircraft-share-widget.component';

describe('AircraftShareWidgetComponent', () => {
  let component: AircraftShareWidgetComponent;
  let fixture: ComponentFixture<AircraftShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
