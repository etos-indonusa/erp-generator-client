import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogShareHeaderComponent } from './part-log-share-header.component';

describe('PartLogShareHeaderComponent', () => {
  let component: PartLogShareHeaderComponent;
  let fixture: ComponentFixture<PartLogShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
