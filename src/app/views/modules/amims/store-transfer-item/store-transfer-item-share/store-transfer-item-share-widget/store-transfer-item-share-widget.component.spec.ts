import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferItemShareWidgetComponent } from './store-transfer-item-share-widget.component';

describe('StoreTransferItemShareWidgetComponent', () => {
  let component: StoreTransferItemShareWidgetComponent;
  let fixture: ComponentFixture<StoreTransferItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
