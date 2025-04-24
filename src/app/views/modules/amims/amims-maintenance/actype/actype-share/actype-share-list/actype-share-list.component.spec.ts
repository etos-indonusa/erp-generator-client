import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActypeShareListComponent } from './actype-share-list.component';

describe('ActypeShareListComponent', () => {
  let component: ActypeShareListComponent;
  let fixture: ComponentFixture<ActypeShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActypeShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActypeShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
