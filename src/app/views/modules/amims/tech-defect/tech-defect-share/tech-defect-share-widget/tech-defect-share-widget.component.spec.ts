import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectShareWidgetComponent } from './tech-defect-share-widget.component';

describe('TechDefectShareWidgetComponent', () => {
  let component: TechDefectShareWidgetComponent;
  let fixture: ComponentFixture<TechDefectShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
