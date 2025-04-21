import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibReferenceShareDetailComponent } from './lib-reference-share-detail.component';

describe('LibReferenceShareDetailComponent', () => {
  let component: LibReferenceShareDetailComponent;
  let fixture: ComponentFixture<LibReferenceShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibReferenceShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibReferenceShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
