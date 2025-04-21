import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurReturnItemShareWidgetComponent } from './pur-return-item-share-widget.component';

describe('PurReturnItemShareWidgetComponent', () => {
  let component: PurReturnItemShareWidgetComponent;
  let fixture: ComponentFixture<PurReturnItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurReturnItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurReturnItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
