import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatitosDetailPage } from './gatitos-detail.page';

describe('GatitosDetailPage', () => {
  let component: GatitosDetailPage;
  let fixture: ComponentFixture<GatitosDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GatitosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
