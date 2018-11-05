import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-admin-pessoas',
  templateUrl: './admin-pessoas.component.html',
  styleUrls: ['./admin-pessoas.component.css']
})
export class AdminPessoasComponent implements OnInit {
  pessoas$ = null;
  
  constructor(private autores_service: AutoresService) { }

  ngOnInit() {
    this.pessoas$ = this.autores_service.todos();
  }

  excluir(id){
    this.autores_service.excluir(id).subscribe(
      pessoa => {
        this.pessoas$ = this.autores_service.todos()
      },
      erro => {
        console.log(erro);

      }
    )
  }

}
