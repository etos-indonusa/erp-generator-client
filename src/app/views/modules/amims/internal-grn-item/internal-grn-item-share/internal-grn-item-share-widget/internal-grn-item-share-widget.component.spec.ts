import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalGrnItemShareWidgetComponent } from './internal-grn-item-share-widget.component';

describe('InternalGrnItemShareWidgetComponent', () => {
  let component: InternalGrnItemShareWidgetComponent;
  let fixture: ComponentFixture<InternalGrnItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalGrnItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalGrnItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
