import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInlineComponent } from './upload-inline.component';

describe('UploadInlineComponent', () => {
  let component: UploadInlineComponent;
  let fixture: ComponentFixture<UploadInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
