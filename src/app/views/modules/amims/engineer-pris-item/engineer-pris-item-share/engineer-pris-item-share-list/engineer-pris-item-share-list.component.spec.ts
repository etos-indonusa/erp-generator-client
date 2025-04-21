import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemShareListComponent } from './engineer-pris-item-share-list.component';

describe('EngineerPrisItemShareListComponent', () => {
  let component: EngineerPrisItemShareListComponent;
  let fixture: ComponentFixture<EngineerPrisItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
