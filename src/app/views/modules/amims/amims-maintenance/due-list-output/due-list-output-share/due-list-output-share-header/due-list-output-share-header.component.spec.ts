import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputShareHeaderComponent } from './due-list-output-share-header.component';

describe('DueListOutputShareHeaderComponent', () => {
  let component: DueListOutputShareHeaderComponent;
  let fixture: ComponentFixture<DueListOutputShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
