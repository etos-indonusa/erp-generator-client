import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingCounterShareAddComponent } from './document-numbering-counter-share-add.component';

describe('DocumentNumberingCounterShareAddComponent', () => {
  let component: DocumentNumberingCounterShareAddComponent;
  let fixture: ComponentFixture<DocumentNumberingCounterShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingCounterShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingCounterShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
