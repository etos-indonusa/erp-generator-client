import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseShareDetailComponent } from './mpc-gse-share-detail.component';

describe('MpcGseShareDetailComponent', () => {
  let component: MpcGseShareDetailComponent;
  let fixture: ComponentFixture<MpcGseShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
