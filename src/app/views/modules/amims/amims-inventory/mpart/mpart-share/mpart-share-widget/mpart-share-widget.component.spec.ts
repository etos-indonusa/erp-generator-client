import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartShareWidgetComponent } from './mpart-share-widget.component';

describe('MpartShareWidgetComponent', () => {
  let component: MpartShareWidgetComponent;
  let fixture: ComponentFixture<MpartShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
