import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnItemShareWidgetComponent } from './pur-grn-item-share-widget.component';

describe('PurGrnItemShareWidgetComponent', () => {
  let component: PurGrnItemShareWidgetComponent;
  let fixture: ComponentFixture<PurGrnItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
