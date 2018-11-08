import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiJabatanComponent } from './pegawai-jabatan.component';

describe('PegawaiJabatanComponent', () => {
  let component: PegawaiJabatanComponent;
  let fixture: ComponentFixture<PegawaiJabatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiJabatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiJabatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
