import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeShareAddComponent } from './part-alternative-share-add.component';

describe('PartAlternativeShareAddComponent', () => {
  let component: PartAlternativeShareAddComponent;
  let fixture: ComponentFixture<PartAlternativeShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
