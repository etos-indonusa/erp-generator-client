import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputShareAddComponent } from './due-list-output-share-add.component';

describe('DueListOutputShareAddComponent', () => {
  let component: DueListOutputShareAddComponent;
  let fixture: ComponentFixture<DueListOutputShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
