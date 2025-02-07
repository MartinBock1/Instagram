import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor() {}
  subscriberList: {
    name: string;
    isFollow: boolean;
    isFollowYou: boolean;
  }[] = 
  [
    {
      name: 'Anna Müller',
      isFollow: true,
      isFollowYou: true,
    },
    {
      name: 'Bernd Schmidt',
      isFollow: false,
      isFollowYou: true,
    },
    {
      name: 'Max Muster',
      isFollow: false,
      isFollowYou: false,
    },
    {
      name: 'Mario Kunst',
      isFollow: true,
      isFollowYou: true,
    },
    {
      name: 'Holger Meier',
      isFollow: true,
      isFollowYou: false,
    },
  ];
}
