import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorShareListComponent } from './mpc-jo-operator-share-list.component';

describe('MpcJoOperatorShareListComponent', () => {
  let component: MpcJoOperatorShareListComponent;
  let fixture: ComponentFixture<MpcJoOperatorShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
