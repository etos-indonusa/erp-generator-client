import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartDetailAttachmentComponent } from './mpart-detail-attachment.component';

describe('MpartDetailAttachmentComponent', () => {
  let component: MpartDetailAttachmentComponent;
  let fixture: ComponentFixture<MpartDetailAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartDetailAttachmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartDetailAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
