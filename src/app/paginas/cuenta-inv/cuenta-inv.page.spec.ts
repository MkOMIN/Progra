import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentaInvPage } from './cuenta-inv.page';

describe('CuentaInvPage', () => {
  let component: CuentaInvPage;
  let fixture: ComponentFixture<CuentaInvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaInvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
