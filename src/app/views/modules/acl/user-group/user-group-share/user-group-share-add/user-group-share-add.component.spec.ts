import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupShareAddComponent } from './user-group-share-add.component';

describe('UserGroupShareAddComponent', () => {
  let component: UserGroupShareAddComponent;
  let fixture: ComponentFixture<UserGroupShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserGroupShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
