import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisShareAddComponent } from './engineer-pris-share-add.component';

describe('EngineerPrisShareAddComponent', () => {
  let component: EngineerPrisShareAddComponent;
  let fixture: ComponentFixture<EngineerPrisShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
