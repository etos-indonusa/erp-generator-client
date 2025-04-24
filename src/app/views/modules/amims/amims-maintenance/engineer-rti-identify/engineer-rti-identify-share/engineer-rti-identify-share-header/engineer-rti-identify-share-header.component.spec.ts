import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyShareHeaderComponent } from './engineer-rti-identify-share-header.component';

describe('EngineerRtiIdentifyShareHeaderComponent', () => {
  let component: EngineerRtiIdentifyShareHeaderComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
