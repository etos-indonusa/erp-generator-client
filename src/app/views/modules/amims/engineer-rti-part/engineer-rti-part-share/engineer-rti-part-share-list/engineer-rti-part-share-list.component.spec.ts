import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartShareListComponent } from './engineer-rti-part-share-list.component';

describe('EngineerRtiPartShareListComponent', () => {
  let component: EngineerRtiPartShareListComponent;
  let fixture: ComponentFixture<EngineerRtiPartShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
