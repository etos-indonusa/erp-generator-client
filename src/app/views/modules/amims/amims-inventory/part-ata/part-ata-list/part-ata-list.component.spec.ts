import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaListComponent } from './part-ata-list.component';

describe('PartAtaListComponent', () => {
  let component: PartAtaListComponent;
  let fixture: ComponentFixture<PartAtaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
