import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarPessoaComponent } from './admin-cadastrar-pessoa.component';

describe('AdminCadastrarPessoaComponent', () => {
  let component: AdminCadastrarPessoaComponent;
  let fixture: ComponentFixture<AdminCadastrarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastrarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastrarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
