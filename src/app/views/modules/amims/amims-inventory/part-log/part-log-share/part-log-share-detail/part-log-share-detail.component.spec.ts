import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogShareDetailComponent } from './part-log-share-detail.component';

describe('PartLogShareDetailComponent', () => {
  let component: PartLogShareDetailComponent;
  let fixture: ComponentFixture<PartLogShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
