import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingListComponent } from './document-numbering-list.component';

describe('DocumentNumberingListComponent', () => {
  let component: DocumentNumberingListComponent;
  let fixture: ComponentFixture<DocumentNumberingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
