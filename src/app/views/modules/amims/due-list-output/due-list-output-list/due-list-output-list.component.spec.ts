import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputListComponent } from './due-list-output-list.component';

describe('DueListOutputListComponent', () => {
  let component: DueListOutputListComponent;
  let fixture: ComponentFixture<DueListOutputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
