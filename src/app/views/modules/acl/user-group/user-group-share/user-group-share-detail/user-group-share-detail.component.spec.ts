import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupShareDetailComponent } from './user-group-share-detail.component';

describe('UserGroupShareDetailComponent', () => {
  let component: UserGroupShareDetailComponent;
  let fixture: ComponentFixture<UserGroupShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserGroupShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
