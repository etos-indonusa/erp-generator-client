import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUploadShareAddComponent } from './lib-upload-share-add.component';

describe('LibUploadShareAddComponent', () => {
  let component: LibUploadShareAddComponent;
  let fixture: ComponentFixture<LibUploadShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibUploadShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibUploadShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
