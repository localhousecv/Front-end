import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianSikapComponent } from './penilaian-sikap.component';

describe('PenilaianSikapComponent', () => {
  let component: PenilaianSikapComponent;
  let fixture: ComponentFixture<PenilaianSikapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianSikapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianSikapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
