import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPoItemShareWidgetComponent } from './pur-po-item-share-widget.component';

describe('PurPoItemShareWidgetComponent', () => {
  let component: PurPoItemShareWidgetComponent;
  let fixture: ComponentFixture<PurPoItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurPoItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPoItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
