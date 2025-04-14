import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV1Component } from './profile-v1.component';

describe('ProfileV1Component', () => {
  let component: ProfileV1Component;
  let fixture: ComponentFixture<ProfileV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
