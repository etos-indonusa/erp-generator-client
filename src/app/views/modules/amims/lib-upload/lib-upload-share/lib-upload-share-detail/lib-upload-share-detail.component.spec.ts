import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUploadShareDetailComponent } from './lib-upload-share-detail.component';

describe('LibUploadShareDetailComponent', () => {
  let component: LibUploadShareDetailComponent;
  let fixture: ComponentFixture<LibUploadShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibUploadShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibUploadShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
