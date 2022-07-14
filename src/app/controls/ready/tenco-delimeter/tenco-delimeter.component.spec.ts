import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoDelimeterComponent } from './tenco-delimeter.component';

describe('TencoDelimeterComponent', () => {
  let component: TencoDelimeterComponent;
  let fixture: ComponentFixture<TencoDelimeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoDelimeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoDelimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
