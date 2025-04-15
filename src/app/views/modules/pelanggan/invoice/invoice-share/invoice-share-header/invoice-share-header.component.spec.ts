import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareHeaderComponent } from './invoice-share-header.component';

describe('InvoiceShareHeaderComponent', () => {
  let component: InvoiceShareHeaderComponent;
  let fixture: ComponentFixture<InvoiceShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
