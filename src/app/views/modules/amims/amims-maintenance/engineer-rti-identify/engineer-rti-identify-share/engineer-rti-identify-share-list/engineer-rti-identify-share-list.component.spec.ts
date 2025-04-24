import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyShareListComponent } from './engineer-rti-identify-share-list.component';

describe('EngineerRtiIdentifyShareListComponent', () => {
  let component: EngineerRtiIdentifyShareListComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
