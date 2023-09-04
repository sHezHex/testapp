import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGatitoPage } from './add-gatito.page';

describe('AddGatitoPage', () => {
  let component: AddGatitoPage;
  let fixture: ComponentFixture<AddGatitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGatitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
