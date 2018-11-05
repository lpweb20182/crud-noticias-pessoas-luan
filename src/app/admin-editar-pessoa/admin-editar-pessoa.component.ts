import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-pessoa',
  templateUrl: './admin-editar-pessoa.component.html',
  styleUrls: ['./admin-editar-pessoa.component.css']
})
export class AdminEditarPessoaComponent implements OnInit {
  pessoa = null;
  pessoa_erro = false;

  constructor(private autor_service: AutoresService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.pessoa = this.autor_service.encontrar(Number.parseInt(id))
    .subscribe(pessoa => {
      if (!pessoa) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.pessoa = pessoa;
      }
    },
    erro => this.pessoa_erro = true);
  }

  editar(){
    this.autor_service.editar(this.pessoa.id, this.pessoa.nome, this.pessoa.email)
    .subscribe(
      pessoa => {

      },
      erro => {
        console.log(erro);
      }
    )
  }

}
