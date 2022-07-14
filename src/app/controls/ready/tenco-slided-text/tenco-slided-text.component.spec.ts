import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoSlidedTextComponent } from './tenco-slided-text.component';

describe('TencoSlidedTextComponent', () => {
  let component: TencoSlidedTextComponent;
  let fixture: ComponentFixture<TencoSlidedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoSlidedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoSlidedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
