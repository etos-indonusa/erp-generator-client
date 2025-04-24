import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpShareDetailComponent } from './mpc-wp-share-detail.component';

describe('MpcWpShareDetailComponent', () => {
  let component: MpcWpShareDetailComponent;
  let fixture: ComponentFixture<MpcWpShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
