import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveproductsComponent } from './approveproducts.component';

describe('ApproveproductsComponent', () => {
  let component: ApproveproductsComponent;
  let fixture: ComponentFixture<ApproveproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveproductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
