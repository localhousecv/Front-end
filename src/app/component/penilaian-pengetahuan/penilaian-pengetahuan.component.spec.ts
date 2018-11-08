import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianPengetahuanComponent } from './penilaian-pengetahuan.component';

describe('PenilaianPengetahuanComponent', () => {
  let component: PenilaianPengetahuanComponent;
  let fixture: ComponentFixture<PenilaianPengetahuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianPengetahuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianPengetahuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
