import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisShareListComponent } from './engineer-pris-share-list.component';

describe('EngineerPrisShareListComponent', () => {
  let component: EngineerPrisShareListComponent;
  let fixture: ComponentFixture<EngineerPrisShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
