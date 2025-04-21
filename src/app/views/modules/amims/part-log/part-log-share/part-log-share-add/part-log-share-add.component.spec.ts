import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogShareAddComponent } from './part-log-share-add.component';

describe('PartLogShareAddComponent', () => {
  let component: PartLogShareAddComponent;
  let fixture: ComponentFixture<PartLogShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartLogShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLogShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
