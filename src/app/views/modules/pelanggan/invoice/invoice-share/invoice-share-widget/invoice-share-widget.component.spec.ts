import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareWidgetComponent } from './invoice-share-widget.component';

describe('InvoiceShareWidgetComponent', () => {
  let component: InvoiceShareWidgetComponent;
  let fixture: ComponentFixture<InvoiceShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
