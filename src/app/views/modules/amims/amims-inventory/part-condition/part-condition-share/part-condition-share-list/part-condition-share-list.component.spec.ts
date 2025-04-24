import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartConditionShareListComponent } from './part-condition-share-list.component';

describe('PartConditionShareListComponent', () => {
  let component: PartConditionShareListComponent;
  let fixture: ComponentFixture<PartConditionShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartConditionShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartConditionShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
