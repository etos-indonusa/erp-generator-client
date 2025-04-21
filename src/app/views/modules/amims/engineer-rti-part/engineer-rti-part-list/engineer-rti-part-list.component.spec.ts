import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartListComponent } from './engineer-rti-part-list.component';

describe('EngineerRtiPartListComponent', () => {
  let component: EngineerRtiPartListComponent;
  let fixture: ComponentFixture<EngineerRtiPartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
