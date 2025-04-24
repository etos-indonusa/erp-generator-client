import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorShareDetailComponent } from './mpc-jo-operator-share-detail.component';

describe('MpcJoOperatorShareDetailComponent', () => {
  let component: MpcJoOperatorShareDetailComponent;
  let fixture: ComponentFixture<MpcJoOperatorShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
