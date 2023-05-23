import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JffAngularToolsComponent } from './jff-angular-tools.component';

describe('JffAngularToolsComponent', () => {
  let component: JffAngularToolsComponent;
  let fixture: ComponentFixture<JffAngularToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JffAngularToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JffAngularToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
