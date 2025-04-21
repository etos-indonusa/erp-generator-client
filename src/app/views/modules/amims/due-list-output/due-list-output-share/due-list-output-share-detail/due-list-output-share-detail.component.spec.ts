import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputShareDetailComponent } from './due-list-output-share-detail.component';

describe('DueListOutputShareDetailComponent', () => {
  let component: DueListOutputShareDetailComponent;
  let fixture: ComponentFixture<DueListOutputShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
