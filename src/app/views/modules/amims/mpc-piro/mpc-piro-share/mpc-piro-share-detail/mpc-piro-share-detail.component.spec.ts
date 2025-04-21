import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroShareDetailComponent } from './mpc-piro-share-detail.component';

describe('MpcPiroShareDetailComponent', () => {
  let component: MpcPiroShareDetailComponent;
  let fixture: ComponentFixture<MpcPiroShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
