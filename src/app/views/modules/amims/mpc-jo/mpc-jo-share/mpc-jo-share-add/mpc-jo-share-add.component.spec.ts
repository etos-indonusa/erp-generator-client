import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoShareAddComponent } from './mpc-jo-share-add.component';

describe('MpcJoShareAddComponent', () => {
  let component: MpcJoShareAddComponent;
  let fixture: ComponentFixture<MpcJoShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
