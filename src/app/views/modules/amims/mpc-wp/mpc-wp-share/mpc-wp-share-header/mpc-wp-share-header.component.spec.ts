import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpShareHeaderComponent } from './mpc-wp-share-header.component';

describe('MpcWpShareHeaderComponent', () => {
  let component: MpcWpShareHeaderComponent;
  let fixture: ComponentFixture<MpcWpShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
