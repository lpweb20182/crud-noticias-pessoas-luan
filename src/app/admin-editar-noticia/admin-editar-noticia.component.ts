import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { NoticiasService } from '../noticias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-noticia',
  templateUrl: './admin-editar-noticia.component.html',
  styleUrls: ['./admin-editar-noticia.component.css']
})
export class AdminEditarNoticiaComponent implements OnInit {
  noticia = null;
  autores = null;
  editar_ok = false;
  editar_erro = false;
  pessoa_erro = false;

  constructor(private autores_service: AutoresService, 
    private noticias_service: NoticiasService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
    const id = this.route.snapshot.paramMap.get('id')
    this.noticia = this.noticias_service.encontrar(Number.parseInt(id))
    .subscribe(noticia => {
      if (!noticia) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.noticia = noticia;
      }
    },
    erro => this.pessoa_erro = true);
  }

  editar() {
    this.noticias_service.editar(this.noticia.id, this.noticia.titulo, this.noticia.resumo,
      this.noticia.conteudo, this.noticia.autor, this.noticia.data, this.noticia.publicada,
      this.noticia.destaque).subscribe(
        noticia => {
          this.editar_ok = true;
        },
        erro => {
          console.log(erro);
          this.editar_erro = true;
        }

      )
  }
}
