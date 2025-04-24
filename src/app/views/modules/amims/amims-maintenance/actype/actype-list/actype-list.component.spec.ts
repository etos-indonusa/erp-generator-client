import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeListComponent } from './actype-list.component';

describe('ActypeListComponent', () => {
  let component: ActypeListComponent;
  let fixture: ComponentFixture<ActypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
