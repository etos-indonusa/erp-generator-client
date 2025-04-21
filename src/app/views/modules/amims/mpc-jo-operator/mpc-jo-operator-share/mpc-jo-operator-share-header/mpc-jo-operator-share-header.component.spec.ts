import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorShareHeaderComponent } from './mpc-jo-operator-share-header.component';

describe('MpcJoOperatorShareHeaderComponent', () => {
  let component: MpcJoOperatorShareHeaderComponent;
  let fixture: ComponentFixture<MpcJoOperatorShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
