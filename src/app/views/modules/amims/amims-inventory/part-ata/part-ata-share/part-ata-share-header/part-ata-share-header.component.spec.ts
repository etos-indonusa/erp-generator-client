import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaShareHeaderComponent } from './part-ata-share-header.component';

describe('PartAtaShareHeaderComponent', () => {
  let component: PartAtaShareHeaderComponent;
  let fixture: ComponentFixture<PartAtaShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
