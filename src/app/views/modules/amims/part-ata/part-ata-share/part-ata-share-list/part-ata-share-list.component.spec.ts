import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaShareListComponent } from './part-ata-share-list.component';

describe('PartAtaShareListComponent', () => {
  let component: PartAtaShareListComponent;
  let fixture: ComponentFixture<PartAtaShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
