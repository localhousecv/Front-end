import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswaMasterComponent } from './siswa-master.component';

describe('SiswaMasterComponent', () => {
  let component: SiswaMasterComponent;
  let fixture: ComponentFixture<SiswaMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiswaMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiswaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
