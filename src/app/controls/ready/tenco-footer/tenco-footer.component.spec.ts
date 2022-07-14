import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoFooterComponent } from './tenco-footer.component';

describe('TencoFooterComponent', () => {
  let component: TencoFooterComponent;
  let fixture: ComponentFixture<TencoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
