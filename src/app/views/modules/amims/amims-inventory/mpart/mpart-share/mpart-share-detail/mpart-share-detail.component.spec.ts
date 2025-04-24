import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpartShareDetailComponent } from './mpart-share-detail.component';

describe('MpartShareDetailComponent', () => {
  let component: MpartShareDetailComponent;
  let fixture: ComponentFixture<MpartShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpartShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpartShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
