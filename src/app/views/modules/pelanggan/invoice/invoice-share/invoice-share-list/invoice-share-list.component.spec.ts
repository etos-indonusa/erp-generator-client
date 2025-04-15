import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareListComponent } from './invoice-share-list.component';

describe('InvoiceShareListComponent', () => {
  let component: InvoiceShareListComponent;
  let fixture: ComponentFixture<InvoiceShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
