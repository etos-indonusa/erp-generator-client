import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShareWidgetComponent } from './users-share-widget.component';

describe('UsersShareWidgetComponent', () => {
  let component: UsersShareWidgetComponent;
  let fixture: ComponentFixture<UsersShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
