import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiIdentifyListComponent } from './engineer-rti-identify-list.component';

describe('EngineerRtiIdentifyListComponent', () => {
  let component: EngineerRtiIdentifyListComponent;
  let fixture: ComponentFixture<EngineerRtiIdentifyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiIdentifyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiIdentifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
