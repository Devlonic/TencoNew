import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoImagedTextComponent } from './tenco-imaged-text.component';

describe('TencoImagedTextComponent', () => {
  let component: TencoImagedTextComponent;
  let fixture: ComponentFixture<TencoImagedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoImagedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoImagedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
