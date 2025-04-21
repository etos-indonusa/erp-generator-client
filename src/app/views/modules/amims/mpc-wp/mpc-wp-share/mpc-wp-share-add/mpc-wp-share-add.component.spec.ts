import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpShareAddComponent } from './mpc-wp-share-add.component';

describe('MpcWpShareAddComponent', () => {
  let component: MpcWpShareAddComponent;
  let fixture: ComponentFixture<MpcWpShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
