import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaShareDetailComponent } from './part-ata-share-detail.component';

describe('PartAtaShareDetailComponent', () => {
  let component: PartAtaShareDetailComponent;
  let fixture: ComponentFixture<PartAtaShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
