import { Component, Input } from '@angular/core';
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
    },
    {
      name: 'Mandy',
      img: 'orange.jpg',
      likes: 3,
      liked: false,
    },
    {
      name: 'Nadine',
      img: 'currant.jpg',
      likes: 12,
      liked: true,
    },
  ];

  // toggleHeart(index: number) {
  //   this.postslist[index].liked = !this.postslist[index].liked;

  //   if (this.postslist[index].liked) {
  //     this.postslist[index].likes++;
  //   } else {
  //     this.postslist[index].likes--;
  //   }
  // }
}
