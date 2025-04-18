import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShareHeaderComponent } from './users-share-header.component';

describe('UsersShareHeaderComponent', () => {
  let component: UsersShareHeaderComponent;
  let fixture: ComponentFixture<UsersShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
