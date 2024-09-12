import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeInvPage } from './home-inv.page';

describe('HomeInvPage', () => {
  let component: HomeInvPage;
  let fixture: ComponentFixture<HomeInvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
