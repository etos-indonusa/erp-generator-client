import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectShareDetailComponent } from './tech-defect-share-detail.component';

describe('TechDefectShareDetailComponent', () => {
  let component: TechDefectShareDetailComponent;
  let fixture: ComponentFixture<TechDefectShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
