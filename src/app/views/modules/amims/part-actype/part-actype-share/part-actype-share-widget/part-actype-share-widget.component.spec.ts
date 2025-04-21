import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeShareWidgetComponent } from './part-actype-share-widget.component';

describe('PartActypeShareWidgetComponent', () => {
  let component: PartActypeShareWidgetComponent;
  let fixture: ComponentFixture<PartActypeShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
