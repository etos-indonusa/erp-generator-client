import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotShareAddComponent } from './pilot-share-add.component';

describe('PilotShareAddComponent', () => {
  let component: PilotShareAddComponent;
  let fixture: ComponentFixture<PilotShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
