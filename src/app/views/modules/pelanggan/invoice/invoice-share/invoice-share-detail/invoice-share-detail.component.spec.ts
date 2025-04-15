import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareDetailComponent } from './invoice-share-detail.component';

describe('InvoiceShareDetailComponent', () => {
  let component: InvoiceShareDetailComponent;
  let fixture: ComponentFixture<InvoiceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
