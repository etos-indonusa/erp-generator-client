import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisListComponent } from './engineer-pris-list.component';

describe('EngineerPrisListComponent', () => {
  let component: EngineerPrisListComponent;
  let fixture: ComponentFixture<EngineerPrisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
