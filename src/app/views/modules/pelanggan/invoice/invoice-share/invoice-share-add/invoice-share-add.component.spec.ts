import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareAddComponent } from './invoice-share-add.component';

describe('InvoiceShareAddComponent', () => {
  let component: InvoiceShareAddComponent;
  let fixture: ComponentFixture<InvoiceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
