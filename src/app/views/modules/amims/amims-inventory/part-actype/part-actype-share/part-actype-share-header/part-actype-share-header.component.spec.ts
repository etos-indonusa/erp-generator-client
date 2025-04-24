import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeShareHeaderComponent } from './part-actype-share-header.component';

describe('PartActypeShareHeaderComponent', () => {
  let component: PartActypeShareHeaderComponent;
  let fixture: ComponentFixture<PartActypeShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
