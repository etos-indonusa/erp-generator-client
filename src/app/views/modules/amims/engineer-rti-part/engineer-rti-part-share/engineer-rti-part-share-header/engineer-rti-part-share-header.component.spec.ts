import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartShareHeaderComponent } from './engineer-rti-part-share-header.component';

describe('EngineerRtiPartShareHeaderComponent', () => {
  let component: EngineerRtiPartShareHeaderComponent;
  let fixture: ComponentFixture<EngineerRtiPartShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
