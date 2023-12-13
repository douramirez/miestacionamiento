import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarArriendoModalPage } from './confirmar-arriendo-modal.page';

describe('ConfirmarArriendoModalPage', () => {
  let component: ConfirmarArriendoModalPage;
  let fixture: ComponentFixture<ConfirmarArriendoModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarArriendoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
