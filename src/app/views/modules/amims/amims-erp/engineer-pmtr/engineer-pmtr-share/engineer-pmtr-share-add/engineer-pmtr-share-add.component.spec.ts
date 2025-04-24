import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrShareAddComponent } from './engineer-pmtr-share-add.component';

describe('EngineerPmtrShareAddComponent', () => {
  let component: EngineerPmtrShareAddComponent;
  let fixture: ComponentFixture<EngineerPmtrShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
