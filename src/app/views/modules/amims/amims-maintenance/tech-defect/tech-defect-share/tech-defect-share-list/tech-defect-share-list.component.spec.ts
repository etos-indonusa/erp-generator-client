import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectShareListComponent } from './tech-defect-share-list.component';

describe('TechDefectShareListComponent', () => {
  let component: TechDefectShareListComponent;
  let fixture: ComponentFixture<TechDefectShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
