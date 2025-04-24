import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotShareHeaderComponent } from './pilot-share-header.component';

describe('PilotShareHeaderComponent', () => {
  let component: PilotShareHeaderComponent;
  let fixture: ComponentFixture<PilotShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
