import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirctatDetailComponent } from './airctat-detail.component';

describe('AirctatDetailComponent', () => {
  let component: AirctatDetailComponent;
  let fixture: ComponentFixture<AirctatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirctatDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirctatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
