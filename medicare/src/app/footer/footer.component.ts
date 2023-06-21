import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  newsletter: any;
  email!: string;
  constructor() {}

  ngOnInit(): void {
    this.newsletter = document.getElementById('newsletter');
  }

  letter(): void {
    this.email = this.newsletter.value;
    this.newsletter.value = '';
  }
}
