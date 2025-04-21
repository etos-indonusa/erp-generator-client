import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPmtrShareListComponent } from './engineer-pmtr-share-list.component';

describe('EngineerPmtrShareListComponent', () => {
  let component: EngineerPmtrShareListComponent;
  let fixture: ComponentFixture<EngineerPmtrShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPmtrShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPmtrShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
