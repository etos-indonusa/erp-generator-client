import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnListComponent } from './engineer-pris-return-list.component';

describe('EngineerPrisReturnListComponent', () => {
  let component: EngineerPrisReturnListComponent;
  let fixture: ComponentFixture<EngineerPrisReturnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
