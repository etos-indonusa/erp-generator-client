import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeShareDetailComponent } from './part-actype-share-detail.component';

describe('PartActypeShareDetailComponent', () => {
  let component: PartActypeShareDetailComponent;
  let fixture: ComponentFixture<PartActypeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
