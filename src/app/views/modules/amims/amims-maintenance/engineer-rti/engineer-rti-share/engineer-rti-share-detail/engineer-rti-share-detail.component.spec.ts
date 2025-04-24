import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiShareDetailComponent } from './engineer-rti-share-detail.component';

describe('EngineerRtiShareDetailComponent', () => {
  let component: EngineerRtiShareDetailComponent;
  let fixture: ComponentFixture<EngineerRtiShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
