import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputListComponent } from './v-due-list-output-list.component';

describe('VDueListOutputListComponent', () => {
  let component: VDueListOutputListComponent;
  let fixture: ComponentFixture<VDueListOutputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
