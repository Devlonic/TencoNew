import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoNumeredListTextItemComponent } from './tenco-numered-list-text-item.component';

describe('TencoNumeredListTextItemComponent', () => {
  let component: TencoNumeredListTextItemComponent;
  let fixture: ComponentFixture<TencoNumeredListTextItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoNumeredListTextItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoNumeredListTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
