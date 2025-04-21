import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrItemShareWidgetComponent } from './engineer-pmtr-item-share-widget.component';

describe('EngineerPmtrItemShareWidgetComponent', () => {
  let component: EngineerPmtrItemShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPmtrItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
