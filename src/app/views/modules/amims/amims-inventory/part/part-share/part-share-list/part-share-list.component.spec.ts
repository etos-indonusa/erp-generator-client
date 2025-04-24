import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartShareListComponent } from './part-share-list.component';

describe('PartShareListComponent', () => {
  let component: PartShareListComponent;
  let fixture: ComponentFixture<PartShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
