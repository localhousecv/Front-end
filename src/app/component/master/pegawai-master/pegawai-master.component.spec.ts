import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiMasterComponent } from './pegawai-master.component';

describe('PegawaiMasterComponent', () => {
  let component: PegawaiMasterComponent;
  let fixture: ComponentFixture<PegawaiMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
