import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarPessoaComponent } from './admin-editar-pessoa.component';

describe('AdminEditarPessoaComponent', () => {
  let component: AdminEditarPessoaComponent;
  let fixture: ComponentFixture<AdminEditarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
