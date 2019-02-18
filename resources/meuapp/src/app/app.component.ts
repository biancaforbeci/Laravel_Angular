import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

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

  constructor(public dialog: MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent,{
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(
     (result) => {
       if(result){
         console.log(result);
       }
     }
    );
  }

}
