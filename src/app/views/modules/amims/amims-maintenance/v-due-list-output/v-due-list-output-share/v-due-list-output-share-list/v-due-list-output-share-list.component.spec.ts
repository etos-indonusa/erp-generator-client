import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputShareListComponent } from './v-due-list-output-share-list.component';

describe('VDueListOutputShareListComponent', () => {
  let component: VDueListOutputShareListComponent;
  let fixture: ComponentFixture<VDueListOutputShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
