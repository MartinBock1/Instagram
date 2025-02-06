import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces/post-interface.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Komponente, die einen einzelnen Beitrag darstellt.
 * 
 * Diese Komponente ermöglicht es, einen Beitrag anzuzeigen, 
 * einschließlich der Möglichkeit, den "Gefällt mir"-Status zu toggeln 
 * und Kommentare zu senden.
 */
@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})

export class SinglePostComponent {
  /**
   * Der Beitrag, der in dieser Komponente angezeigt wird.
   * @type {Post}
   */
  @Input() post: Post = {
    name: 'Hans',
    img: 'banana.png',
    likes: 95,
    liked: true,
    comments: ['ist lecker', 'nicht so meins'],
  };

  /**
   * Wechselt den "Gefällt mir"-Status des Beitrags.
   * Erhöht oder verringert die Anzahl der Likes entsprechend.
   * @returns {void}
   */
  toggleHeart() {
    this.post.liked = !this.post.liked;

    if (this.post.liked) {
      this.post.likes++;
    } else {
      this.post.likes--;
    }
  }

  /**
   * Der Eingabetext für den Kommentar.
   * @type {string}
   */
  inputData = '';

  /**
   * Ereignis, das ausgelöst wird, wenn ein Kommentar gesendet wird.
   * @type {EventEmitter}
   */
  @Output() comment = new EventEmitter<string>();

  /**
   * Sendet die Eingabedaten als Kommentar.
   * Setzt das Eingabefeld nach dem Senden zurück.
   * @returns {void}
   */
  sendInputData() {
    this.comment.emit(this.inputData);
    this.inputData = '';
  }
}
