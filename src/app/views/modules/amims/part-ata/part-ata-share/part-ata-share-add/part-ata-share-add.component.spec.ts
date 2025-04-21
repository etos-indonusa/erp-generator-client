import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaShareAddComponent } from './part-ata-share-add.component';

describe('PartAtaShareAddComponent', () => {
  let component: PartAtaShareAddComponent;
  let fixture: ComponentFixture<PartAtaShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
