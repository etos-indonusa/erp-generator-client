import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemListComponent } from './engineer-pris-item-list.component';

describe('EngineerPrisItemListComponent', () => {
  let component: EngineerPrisItemListComponent;
  let fixture: ComponentFixture<EngineerPrisItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
