import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListV3Component } from './list-v3.component';

describe('ListV3Component', () => {
  let component: ListV3Component;
  let fixture: ComponentFixture<ListV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
