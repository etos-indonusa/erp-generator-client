import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDueListOutputShareAddComponent } from './v-due-list-output-share-add.component';

describe('VDueListOutputShareAddComponent', () => {
  let component: VDueListOutputShareAddComponent;
  let fixture: ComponentFixture<VDueListOutputShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VDueListOutputShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VDueListOutputShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
