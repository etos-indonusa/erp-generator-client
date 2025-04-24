import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionShareWidgetComponent } from './part-condition-share-widget.component';

describe('PartConditionShareWidgetComponent', () => {
  let component: PartConditionShareWidgetComponent;
  let fixture: ComponentFixture<PartConditionShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
