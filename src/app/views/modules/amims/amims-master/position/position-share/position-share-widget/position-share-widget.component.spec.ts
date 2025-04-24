import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionShareWidgetComponent } from './position-share-widget.component';

describe('PositionShareWidgetComponent', () => {
  let component: PositionShareWidgetComponent;
  let fixture: ComponentFixture<PositionShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
