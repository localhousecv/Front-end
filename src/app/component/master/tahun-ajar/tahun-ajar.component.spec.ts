import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TahunAjarComponent } from './tahun-ajar.component';

describe('TahunAjarComponent', () => {
  let component: TahunAjarComponent;
  let fixture: ComponentFixture<TahunAjarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahunAjarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahunAjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
