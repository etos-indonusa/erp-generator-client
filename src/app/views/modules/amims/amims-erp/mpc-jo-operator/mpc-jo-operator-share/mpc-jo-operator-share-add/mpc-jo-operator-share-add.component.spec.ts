import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorShareAddComponent } from './mpc-jo-operator-share-add.component';

describe('MpcJoOperatorShareAddComponent', () => {
  let component: MpcJoOperatorShareAddComponent;
  let fixture: ComponentFixture<MpcJoOperatorShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
