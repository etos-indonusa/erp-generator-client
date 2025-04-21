import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeShareListComponent } from './part-alternative-share-list.component';

describe('PartAlternativeShareListComponent', () => {
  let component: PartAlternativeShareListComponent;
  let fixture: ComponentFixture<PartAlternativeShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
