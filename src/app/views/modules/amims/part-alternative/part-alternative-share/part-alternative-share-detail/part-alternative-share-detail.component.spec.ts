import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeShareDetailComponent } from './part-alternative-share-detail.component';

describe('PartAlternativeShareDetailComponent', () => {
  let component: PartAlternativeShareDetailComponent;
  let fixture: ComponentFixture<PartAlternativeShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
