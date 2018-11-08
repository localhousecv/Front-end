import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasTingkatanComponent } from './kelas-tingkatan.component';

describe('KelasTingkatanComponent', () => {
  let component: KelasTingkatanComponent;
  let fixture: ComponentFixture<KelasTingkatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasTingkatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasTingkatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
