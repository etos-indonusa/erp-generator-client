import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionShareAddComponent } from './part-condition-share-add.component';

describe('PartConditionShareAddComponent', () => {
  let component: PartConditionShareAddComponent;
  let fixture: ComponentFixture<PartConditionShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
