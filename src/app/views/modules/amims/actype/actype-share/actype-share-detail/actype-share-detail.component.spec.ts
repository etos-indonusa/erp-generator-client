import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeShareDetailComponent } from './actype-share-detail.component';

describe('ActypeShareDetailComponent', () => {
  let component: ActypeShareDetailComponent;
  let fixture: ComponentFixture<ActypeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
