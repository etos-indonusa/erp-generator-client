import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailShareWidgetComponent } from './aircraft-detail-share-widget.component';

describe('AircraftDetailShareWidgetComponent', () => {
  let component: AircraftDetailShareWidgetComponent;
  let fixture: ComponentFixture<AircraftDetailShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDetailShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
