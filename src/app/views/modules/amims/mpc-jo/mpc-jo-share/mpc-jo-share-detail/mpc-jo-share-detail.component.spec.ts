import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoShareDetailComponent } from './mpc-jo-share-detail.component';

describe('MpcJoShareDetailComponent', () => {
  let component: MpcJoShareDetailComponent;
  let fixture: ComponentFixture<MpcJoShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
