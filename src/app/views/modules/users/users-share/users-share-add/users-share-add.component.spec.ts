import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShareAddComponent } from './users-share-add.component';

describe('UsersShareAddComponent', () => {
  let component: UsersShareAddComponent;
  let fixture: ComponentFixture<UsersShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
