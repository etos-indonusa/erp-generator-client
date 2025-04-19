import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTopMenuComponent } from './base-top-menu.component';

describe('BaseTopMenuComponent', () => {
  let component: BaseTopMenuComponent;
  let fixture: ComponentFixture<BaseTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseTopMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
