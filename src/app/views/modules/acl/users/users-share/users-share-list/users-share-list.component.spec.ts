import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShareListComponent } from './users-share-list.component';

describe('UsersShareListComponent', () => {
  let component: UsersShareListComponent;
  let fixture: ComponentFixture<UsersShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
