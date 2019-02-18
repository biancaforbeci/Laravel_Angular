import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private nomearquivo: string = '';

  private dados= {
    post: new Post("","","","","",""),
    arquivo: null
  };

  constructor(
    public dialogref : MatDialogRef<PostDialogComponent>) { }

  ngOnInit() {
  }

  mudouArquivo(event){
    //console.log(event.target.files[0]);
    this.nomearquivo = event.target.files[0].name; //pegando nome do arquivo
    this.dados.arquivo = event.target.files[0]; //jogando arquivo selecionado na variável
  }

  salvar(){
    this.dialogref.close(this.dados);
  }

  cancelar(){
    this.dialogref.close(null);
  }
}
