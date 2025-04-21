import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartShareDetailComponent } from './part-share-detail.component';

describe('PartShareDetailComponent', () => {
  let component: PartShareDetailComponent;
  let fixture: ComponentFixture<PartShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
