import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUploadListComponent } from './lib-upload-list.component';

describe('LibUploadListComponent', () => {
  let component: LibUploadListComponent;
  let fixture: ComponentFixture<LibUploadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibUploadListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
