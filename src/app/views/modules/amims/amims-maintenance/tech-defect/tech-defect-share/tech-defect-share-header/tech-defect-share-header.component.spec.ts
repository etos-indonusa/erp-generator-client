import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectShareHeaderComponent } from './tech-defect-share-header.component';

describe('TechDefectShareHeaderComponent', () => {
  let component: TechDefectShareHeaderComponent;
  let fixture: ComponentFixture<TechDefectShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
