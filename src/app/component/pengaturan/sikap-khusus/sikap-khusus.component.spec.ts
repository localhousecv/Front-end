import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SikapKhususComponent } from './sikap-khusus.component';

describe('SikapKhususComponent', () => {
  let component: SikapKhususComponent;
  let fixture: ComponentFixture<SikapKhususComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SikapKhususComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikapKhususComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
