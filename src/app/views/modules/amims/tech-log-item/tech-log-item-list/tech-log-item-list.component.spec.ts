import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogItemListComponent } from './tech-log-item-list.component';

describe('TechLogItemListComponent', () => {
  let component: TechLogItemListComponent;
  let fixture: ComponentFixture<TechLogItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
