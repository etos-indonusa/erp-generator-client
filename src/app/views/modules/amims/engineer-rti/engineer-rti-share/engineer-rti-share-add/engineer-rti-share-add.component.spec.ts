import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiShareAddComponent } from './engineer-rti-share-add.component';

describe('EngineerRtiShareAddComponent', () => {
  let component: EngineerRtiShareAddComponent;
  let fixture: ComponentFixture<EngineerRtiShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
