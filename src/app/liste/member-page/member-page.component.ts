import { Component } from '@angular/core';

interface Member {
  name: string;
  photoUrl: string;
  description: string;
}

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent {
  members: Member[] = [
    {
      name: 'David Hoareau - Président',
      photoUrl: 'https://example.com/photo1.jpg',
      description: 'Description du membre 1.'
    },
    // ... Ajoutez les détails des autres membres
  ];

  activeMember: Member | null = null;

  showDescription(member: Member) {
    this.activeMember = member;
  }

  hideDescription() {
    this.activeMember = null;
  }
}
