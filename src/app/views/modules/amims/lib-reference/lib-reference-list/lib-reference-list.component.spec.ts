import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibReferenceListComponent } from './lib-reference-list.component';

describe('LibReferenceListComponent', () => {
  let component: LibReferenceListComponent;
  let fixture: ComponentFixture<LibReferenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibReferenceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
