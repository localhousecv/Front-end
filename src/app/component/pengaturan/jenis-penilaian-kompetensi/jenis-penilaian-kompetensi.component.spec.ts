import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisPenilaianKompetensiComponent } from './jenis-penilaian-kompetensi.component';

describe('JenisPenilaianKompetensiComponent', () => {
  let component: JenisPenilaianKompetensiComponent;
  let fixture: ComponentFixture<JenisPenilaianKompetensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisPenilaianKompetensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisPenilaianKompetensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
