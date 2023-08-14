import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatitosPage } from './gatitos.page';

describe('GatitosPage', () => {
  let component: GatitosPage;
  let fixture: ComponentFixture<GatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
