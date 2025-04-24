import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiListComponent } from './engineer-rti-list.component';

describe('EngineerRtiListComponent', () => {
  let component: EngineerRtiListComponent;
  let fixture: ComponentFixture<EngineerRtiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
