import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartShareAddComponent } from './engineer-rti-part-share-add.component';

describe('EngineerRtiPartShareAddComponent', () => {
  let component: EngineerRtiPartShareAddComponent;
  let fixture: ComponentFixture<EngineerRtiPartShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
