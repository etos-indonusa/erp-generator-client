import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDefectListComponent } from './tech-defect-list.component';

describe('TechDefectListComponent', () => {
  let component: TechDefectListComponent;
  let fixture: ComponentFixture<TechDefectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechDefectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDefectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
