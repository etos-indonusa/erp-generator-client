import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorListComponent } from './mpc-jo-operator-list.component';

describe('MpcJoOperatorListComponent', () => {
  let component: MpcJoOperatorListComponent;
  let fixture: ComponentFixture<MpcJoOperatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
