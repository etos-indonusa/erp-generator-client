import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemShareListComponent } from './tech-log-item-share-list.component';

describe('TechLogItemShareListComponent', () => {
  let component: TechLogItemShareListComponent;
  let fixture: ComponentFixture<TechLogItemShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
