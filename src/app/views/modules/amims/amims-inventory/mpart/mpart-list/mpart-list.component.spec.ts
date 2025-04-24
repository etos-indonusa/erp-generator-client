import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartListComponent } from './mpart-list.component';

describe('MpartListComponent', () => {
  let component: MpartListComponent;
  let fixture: ComponentFixture<MpartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
