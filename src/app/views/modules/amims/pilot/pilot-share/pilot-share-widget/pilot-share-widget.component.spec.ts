import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotShareWidgetComponent } from './pilot-share-widget.component';

describe('PilotShareWidgetComponent', () => {
  let component: PilotShareWidgetComponent;
  let fixture: ComponentFixture<PilotShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
