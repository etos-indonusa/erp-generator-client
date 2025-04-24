import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotShareListComponent } from './pilot-share-list.component';

describe('PilotShareListComponent', () => {
  let component: PilotShareListComponent;
  let fixture: ComponentFixture<PilotShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
