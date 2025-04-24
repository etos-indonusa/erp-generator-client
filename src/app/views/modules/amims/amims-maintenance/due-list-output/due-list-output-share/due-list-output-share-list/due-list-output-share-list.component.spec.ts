import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputShareListComponent } from './due-list-output-share-list.component';

describe('DueListOutputShareListComponent', () => {
  let component: DueListOutputShareListComponent;
  let fixture: ComponentFixture<DueListOutputShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
