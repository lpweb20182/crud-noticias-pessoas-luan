import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.css']
})
export class AdminNoticiasComponent implements OnInit {
  noticias$ = null;
  constructor(private noticias_service: NoticiasService, private router: Router) { }

  ngOnInit() {
    this.noticias$ = this.noticias_service.todas();
  }

  excluir(id){
    this.noticias_service.excluir(id).subscribe(
      pessoa => {
        this.noticias$ = this.noticias_service.todas();
      },
      erro => {
        console.log(erro);
      }
    )
  }
}
