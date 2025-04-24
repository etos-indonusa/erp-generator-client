import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeShareHeaderComponent } from './part-alternative-share-header.component';

describe('PartAlternativeShareHeaderComponent', () => {
  let component: PartAlternativeShareHeaderComponent;
  let fixture: ComponentFixture<PartAlternativeShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
