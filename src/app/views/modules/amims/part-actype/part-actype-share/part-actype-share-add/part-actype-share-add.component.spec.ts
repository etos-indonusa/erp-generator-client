import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartActypeShareAddComponent } from './part-actype-share-add.component';

describe('PartActypeShareAddComponent', () => {
  let component: PartActypeShareAddComponent;
  let fixture: ComponentFixture<PartActypeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartActypeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartActypeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
