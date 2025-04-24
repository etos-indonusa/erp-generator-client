import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemShareAddComponent } from './engineer-pris-item-share-add.component';

describe('EngineerPrisItemShareAddComponent', () => {
  let component: EngineerPrisItemShareAddComponent;
  let fixture: ComponentFixture<EngineerPrisItemShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
