import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResenaInvPage } from './resena-inv.page';

describe('ResenaInvPage', () => {
  let component: ResenaInvPage;
  let fixture: ComponentFixture<ResenaInvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaInvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
