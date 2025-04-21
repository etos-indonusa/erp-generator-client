import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisShareHeaderComponent } from './engineer-pris-share-header.component';

describe('EngineerPrisShareHeaderComponent', () => {
  let component: EngineerPrisShareHeaderComponent;
  let fixture: ComponentFixture<EngineerPrisShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
