import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../services/subscribe.service';


@Component({
  selector: 'app-follow',
  standalone: true,
  imports: [],
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss',
})
export class FollowComponent {
  subscriberData = inject(SubscribeService);
}
