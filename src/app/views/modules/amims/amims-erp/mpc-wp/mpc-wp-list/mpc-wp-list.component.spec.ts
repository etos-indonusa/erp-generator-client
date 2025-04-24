import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpListComponent } from './mpc-wp-list.component';

describe('MpcWpListComponent', () => {
  let component: MpcWpListComponent;
  let fixture: ComponentFixture<MpcWpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
