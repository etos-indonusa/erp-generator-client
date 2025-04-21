import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeListComponent } from './part-alternative-list.component';

describe('PartAlternativeListComponent', () => {
  let component: PartAlternativeListComponent;
  let fixture: ComponentFixture<PartAlternativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
