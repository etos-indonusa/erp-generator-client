import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeShareHeaderComponent } from './actype-share-header.component';

describe('ActypeShareHeaderComponent', () => {
  let component: ActypeShareHeaderComponent;
  let fixture: ComponentFixture<ActypeShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
