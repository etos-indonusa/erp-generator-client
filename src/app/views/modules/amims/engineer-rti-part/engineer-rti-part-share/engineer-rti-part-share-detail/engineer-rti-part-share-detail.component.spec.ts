import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartShareDetailComponent } from './engineer-rti-part-share-detail.component';

describe('EngineerRtiPartShareDetailComponent', () => {
  let component: EngineerRtiPartShareDetailComponent;
  let fixture: ComponentFixture<EngineerRtiPartShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
