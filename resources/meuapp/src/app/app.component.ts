import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  private posts:Post[]=[
    new Post("Ana","Meu Post","Sub Ana","ana@gmail.com","Minha msg"),
    new Post("Paulo","Post do Paulo","Sub Paulo","paulo@gmail.com","Minha msg"),
    new Post("Bianca","Post da Bianca","Sub Bianca","bianca@gmail.com","Minha msg"),
  ];
}
