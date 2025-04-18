import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingShareAddComponent } from './document-numbering-share-add.component';

describe('DocumentNumberingShareAddComponent', () => {
  let component: DocumentNumberingShareAddComponent;
  let fixture: ComponentFixture<DocumentNumberingShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
