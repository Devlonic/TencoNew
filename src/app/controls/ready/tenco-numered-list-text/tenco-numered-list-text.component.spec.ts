import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoNumeredListTextComponent } from './tenco-numered-list-text.component';

describe('TencoNumeredListTextComponent', () => {
  let component: TencoNumeredListTextComponent;
  let fixture: ComponentFixture<TencoNumeredListTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoNumeredListTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoNumeredListTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
