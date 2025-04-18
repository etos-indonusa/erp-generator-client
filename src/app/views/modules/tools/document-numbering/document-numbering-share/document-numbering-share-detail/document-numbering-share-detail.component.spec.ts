import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingShareDetailComponent } from './document-numbering-share-detail.component';

describe('DocumentNumberingShareDetailComponent', () => {
  let component: DocumentNumberingShareDetailComponent;
  let fixture: ComponentFixture<DocumentNumberingShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
