import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseShareHeaderComponent } from './mpc-gse-share-header.component';

describe('MpcGseShareHeaderComponent', () => {
  let component: MpcGseShareHeaderComponent;
  let fixture: ComponentFixture<MpcGseShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
