import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProgramShareWidgetComponent } from './maintenance-program-share-widget.component';

describe('MaintenanceProgramShareWidgetComponent', () => {
  let component: MaintenanceProgramShareWidgetComponent;
  let fixture: ComponentFixture<MaintenanceProgramShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceProgramShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceProgramShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
