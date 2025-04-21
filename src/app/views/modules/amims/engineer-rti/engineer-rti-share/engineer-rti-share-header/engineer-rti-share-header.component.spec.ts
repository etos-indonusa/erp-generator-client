import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiShareHeaderComponent } from './engineer-rti-share-header.component';

describe('EngineerRtiShareHeaderComponent', () => {
  let component: EngineerRtiShareHeaderComponent;
  let fixture: ComponentFixture<EngineerRtiShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
