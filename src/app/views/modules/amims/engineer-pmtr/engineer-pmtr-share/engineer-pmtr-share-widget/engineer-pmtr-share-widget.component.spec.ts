import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrShareWidgetComponent } from './engineer-pmtr-share-widget.component';

describe('EngineerPmtrShareWidgetComponent', () => {
  let component: EngineerPmtrShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPmtrShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
