import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingCounterShareDetailComponent } from './document-numbering-counter-share-detail.component';

describe('DocumentNumberingCounterShareDetailComponent', () => {
  let component: DocumentNumberingCounterShareDetailComponent;
  let fixture: ComponentFixture<DocumentNumberingCounterShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingCounterShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingCounterShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
