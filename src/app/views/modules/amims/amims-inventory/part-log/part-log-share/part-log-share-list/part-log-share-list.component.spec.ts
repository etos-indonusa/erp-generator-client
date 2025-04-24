import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogShareListComponent } from './part-log-share-list.component';

describe('PartLogShareListComponent', () => {
  let component: PartLogShareListComponent;
  let fixture: ComponentFixture<PartLogShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
