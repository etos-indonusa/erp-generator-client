import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartShareHeaderComponent } from './part-share-header.component';

describe('PartShareHeaderComponent', () => {
  let component: PartShareHeaderComponent;
  let fixture: ComponentFixture<PartShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
