import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post-interface.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post: Post = {
    name: 'Hans',
    img: 'banana.png',
    likes: 95,
    liked: true,
  };

  toggleHeart() {
    this.post.liked = !this.post.liked;

    if (this.post.liked) {
      this.post.likes++;
    } else {
      this.post.likes--;
    }
  }
}
