import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'krtl-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
