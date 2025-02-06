import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post/single-post.component';
import { Post } from '../interfaces/post-interface.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, SinglePostComponent, RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  postslist: Post[] = [
    {
      name: 'Hans',
      img: 'banana.jpg',
      likes: 95,
      liked: true,
      comments: ['ist lecker', 'nicht so meins'],
    },
    {
      name: 'Mandy',
      img: 'orange.jpg',
      likes: 3,
      liked: false,
      comments: ['Absoluter Favorit beim Frühstück'],
    },
    {
      name: 'Nadine',
      img: 'currant.jpg',
      likes: 12,
      liked: true,
      comments: ['Kann man auch mal machen'],
    },
  ];

  addCommentToPost(comment: string, index: number) {
    // console.log(comment);
    this.postslist[index].comments.push(comment);
  }  
}
