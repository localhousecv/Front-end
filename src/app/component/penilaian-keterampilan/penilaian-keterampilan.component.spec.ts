import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianKeterampilanComponent } from './penilaian-keterampilan.component';

describe('PenilaianKeterampilanComponent', () => {
  let component: PenilaianKeterampilanComponent;
  let fixture: ComponentFixture<PenilaianKeterampilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianKeterampilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianKeterampilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
