import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseShareAddComponent } from './mpc-gse-share-add.component';

describe('MpcGseShareAddComponent', () => {
  let component: MpcGseShareAddComponent;
  let fixture: ComponentFixture<MpcGseShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
