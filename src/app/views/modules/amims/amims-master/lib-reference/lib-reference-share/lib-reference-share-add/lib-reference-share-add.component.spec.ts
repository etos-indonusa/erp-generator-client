import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibReferenceShareAddComponent } from './lib-reference-share-add.component';

describe('LibReferenceShareAddComponent', () => {
  let component: LibReferenceShareAddComponent;
  let fixture: ComponentFixture<LibReferenceShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibReferenceShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibReferenceShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
