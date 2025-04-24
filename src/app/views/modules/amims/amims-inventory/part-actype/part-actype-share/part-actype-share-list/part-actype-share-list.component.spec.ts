import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeShareListComponent } from './part-actype-share-list.component';

describe('PartActypeShareListComponent', () => {
  let component: PartActypeShareListComponent;
  let fixture: ComponentFixture<PartActypeShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
