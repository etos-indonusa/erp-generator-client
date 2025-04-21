import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemShareHeaderComponent } from './engineer-pris-item-share-header.component';

describe('EngineerPrisItemShareHeaderComponent', () => {
  let component: EngineerPrisItemShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPrisItemShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
