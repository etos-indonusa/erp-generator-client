import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogShareWidgetComponent } from './part-log-share-widget.component';

describe('PartLogShareWidgetComponent', () => {
  let component: PartLogShareWidgetComponent;
  let fixture: ComponentFixture<PartLogShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
