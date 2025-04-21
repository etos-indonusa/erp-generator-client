import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnShareWidgetComponent } from './internal-grn-share-widget.component';

describe('InternalGrnShareWidgetComponent', () => {
  let component: InternalGrnShareWidgetComponent;
  let fixture: ComponentFixture<InternalGrnShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
