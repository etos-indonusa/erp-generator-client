import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartShareAddComponent } from './part-share-add.component';

describe('PartShareAddComponent', () => {
  let component: PartShareAddComponent;
  let fixture: ComponentFixture<PartShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
