import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyShareDetailComponent } from './engineer-rti-identify-share-detail.component';

describe('EngineerRtiIdentifyShareDetailComponent', () => {
  let component: EngineerRtiIdentifyShareDetailComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
