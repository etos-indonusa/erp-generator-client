import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectShareAddComponent } from './tech-defect-share-add.component';

describe('TechDefectShareAddComponent', () => {
  let component: TechDefectShareAddComponent;
  let fixture: ComponentFixture<TechDefectShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
