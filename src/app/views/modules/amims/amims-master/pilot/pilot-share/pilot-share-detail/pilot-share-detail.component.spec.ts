import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotShareDetailComponent } from './pilot-share-detail.component';

describe('PilotShareDetailComponent', () => {
  let component: PilotShareDetailComponent;
  let fixture: ComponentFixture<PilotShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
