import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNumberingCounterListComponent } from './document-numbering-counter-list.component';

describe('DocumentNumberingCounterListComponent', () => {
  let component: DocumentNumberingCounterListComponent;
  let fixture: ComponentFixture<DocumentNumberingCounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNumberingCounterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNumberingCounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
