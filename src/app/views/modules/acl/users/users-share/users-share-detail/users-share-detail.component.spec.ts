import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShareDetailComponent } from './users-share-detail.component';

describe('UsersShareDetailComponent', () => {
  let component: UsersShareDetailComponent;
  let fixture: ComponentFixture<UsersShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
