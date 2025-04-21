import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyShareAddComponent } from './engineer-rti-identify-share-add.component';

describe('EngineerRtiIdentifyShareAddComponent', () => {
  let component: EngineerRtiIdentifyShareAddComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
