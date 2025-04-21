import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFigureIndexShareWidgetComponent } from './part-figure-index-share-widget.component';

describe('PartFigureIndexShareWidgetComponent', () => {
  let component: PartFigureIndexShareWidgetComponent;
  let fixture: ComponentFixture<PartFigureIndexShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFigureIndexShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFigureIndexShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
