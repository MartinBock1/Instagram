import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces/post-interface.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post: Post = {
    name: 'Hans',
    img: 'banana.png',
    likes: 95,
    liked: true,
    comments: ['ist lecker', 'nicht so meins'],
  };

  toggleHeart() {
    this.post.liked = !this.post.liked;

    if (this.post.liked) {
      this.post.likes++;
    } else {
      this.post.likes--;
    }
  }

  inputData = '';

  @Output() comment = new EventEmitter<string>();

  sendInputData() {
    this.comment.emit(this.inputData);
    this.inputData = '';
  }
}
