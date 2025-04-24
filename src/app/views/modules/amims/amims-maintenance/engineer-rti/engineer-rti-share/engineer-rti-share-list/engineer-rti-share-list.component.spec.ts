import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiShareListComponent } from './engineer-rti-share-list.component';

describe('EngineerRtiShareListComponent', () => {
  let component: EngineerRtiShareListComponent;
  let fixture: ComponentFixture<EngineerRtiShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
