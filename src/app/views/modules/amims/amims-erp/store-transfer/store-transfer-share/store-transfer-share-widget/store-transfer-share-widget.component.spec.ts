import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransferShareWidgetComponent } from './store-transfer-share-widget.component';

describe('StoreTransferShareWidgetComponent', () => {
  let component: StoreTransferShareWidgetComponent;
  let fixture: ComponentFixture<StoreTransferShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreTransferShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTransferShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
